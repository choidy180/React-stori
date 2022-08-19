import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import AOS from 'aos';
import "aos/dist/aos.css";

interface title {
  title: string;
}
// interface cashwalletInterface {
//   data: string;
//   items: {
//       number: number;
//       date: string;
//       paymentAmout: number;
//       method: string;
//       chargingAmount: number;
//   }[];
// }[]
export default function CashWallet(title:title){
  const [selectTab, setSelectTab] = useState("payment");
  useEffect(()=> {
    AOS.init();
  },[])
  const paymentListItems = [
    {
      date: "2022.08.11",
      items: [
        {
          number: 2022102201234,        
          date : "12:34",         
          paymentAmout: 13200,  
          method: "신용카드",        
          chargingAmount: 155,
        },
        {
          number: 2022102201234,        
          date : "16:00",         
          paymentAmout: 13200,  
          method: "계좌이체",        
          chargingAmount: 155,
        },
        {
          number: 2022102201234,        
          date : "21:14",         
          paymentAmout: 13200,  
          method: "보너스지급",        
          chargingAmount: 155,
        },
      ]
    },
    {
      date: "2022.08.01",
      items: [
        {
          number: 2022102201234,        
          date : "15:22",         
          paymentAmout: 13200,  
          method: "토스",        
          chargingAmount: 155,
        },
        {
          number: 2022102201234,        
          date : "16:11",         
          paymentAmout: 13200,  
          method: "네이버페이",        
          chargingAmount: 155,
        },
        {
          number: 2022102201234,        
          date : "19:34",         
          paymentAmout: 13200,  
          method: "신용카드",        
          chargingAmount: 155,
        },
      ]
    }
  ]
  const useListItems = [
    {
      date: "2022.08.01",
      items: [
        {
          number: 2022102201234,
          date: "21:21",
          transition: "minus",
          title: "어느 겨울, 운명의 밤",
          explain: "1부-소장: 겨울날, 마음이 머무는 곳",
          count: 12,
          balance: 36982,
        },
        {
          number: 2022102201234,
          date: "17:37",
          transition: "minus",
          title: "운명의밤",
          explain: "2부-대여: 두 사람의 거리",
          count: 6,
          balance: 36994,
        },
        {
          number: 2022102201234,
          date: "16:13",
          transition: "plus",
          title: "충전(신용카드)+보너스",
          explain: "월 자동구매",
          count: 14000,
          balance: 37000,
        }
      ]
    },
    {
      date: "2022.07.31",
      items: [
        {
          number: 2022102201234,
          date: "19:23",
          transition: "minus",
          title: "만료",
          explain: "미사용분 자동소멸",
          count: 1000,
          balance: 23000,
        },
        {
          number: 2022102201234,
          date: "17:37",
          transition: "plus",
          title: "보너스",
          explain: "운영자 감사의 의미",
          count: 1000,
          balance: 24000,
        },
        {
          number: 2022102201234,
          date: "16:13",
          transition: "plus",
          title: "충전(신용카드)+보너스",
          explain: "월 자동구매",
          count: 14000,
          balance: 23000,
        }
      ]
    }
  ]
  const commaNumber = (number:Number) => {
    return String(number).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return(
    <>
      <HelmetProvider>
        <Helmet title={title.title}/>
      </HelmetProvider>
      <Box>
        <TopTitle>보유 CASH</TopTitle>
        <TopTitleLine/>
        <HaveCash>1,000,000 TC</HaveCash>

        <PaymentDetail>
          <Detail>
            <img src="images/icons/won.svg" alt=""/>
            <p>충전액 &gt;</p>
            <p><b>10</b>TC</p>
          </Detail>
          <Detail>
            <img id="cash_icon" src="images/icons/coinplus.svg" alt=""/>
            <p>월구독액 &gt;</p>
            <p><b>10</b>TC</p>
            <span>소멸예정 D30</span>
          </Detail>
          <Detail>
            <img id="cash_icon2" src="images/icons/CoinPlus2.svg" alt=""/>
            <p>적립액 &gt;</p>
            <p><b>10</b>TC</p>
          </Detail>
        </PaymentDetail>
        <Tab className={selectTab === "payment" ? "payment" : "use"}>
          <TabBox className={selectTab === "payment" ? "active" : ""} onClick={()=>setSelectTab("payment")}>결제내역</TabBox>
          <TabBox className={selectTab === "payment" ? "" : "active"} onClick={()=>setSelectTab("use")}>사용내역</TabBox>
        </Tab>
        <List className={selectTab === "payment" ? "" : "hide"}>
          {paymentListItems.map((content, i) => (
            <ListItem key={i}>
              {/* <p className='head'>{content.date}<AiOutlineRight/></p> */}
              <p className='head'>{content.date}</p>
              {content.items.map((item, j) => (
                <ItemBox key={j}>
                  <p className='time'>{item.date}</p>
                  <p className='method'>{item.method}</p>
                  <p className='amount'>{commaNumber(item.paymentAmout)}원</p>
                  <div>
                    <p className='charge'>+{item.chargingAmount} TC</p>
                    <button>상세보기</button>
                  </div>
                </ItemBox>
              ))}
            </ListItem>
          ))}
        </List>
        <List className={selectTab === "payment" ? "hide" : ""}>
          {useListItems.map((content, i ) => (
            <ListItem key={i}>
              {/* <p className='head'>{content.date}<AiOutlineRight/></p> */}
              <p className='head'>{content.date}</p>
              {content.items.map((item, j) => (
                <ItemBox key={j}>
                  <p className='time'>{item.date}</p>
                  <p className='useMethod'>{item.title}</p>
                  <p className='useAmount'>{item.explain.length < 11 ? item.explain : item.explain.slice(0,11)+"..."}</p>
                  <div>
                    <p className='balancecount'style={item.transition === "plus" ? {color: '#E9446C'} : {color:'#889AF8'}} >{item.transition === "plus" ? "+" : "-"}{commaNumber(item.count)} TC</p>
                    <p className='balance'>잔액 {commaNumber(item.balance)}TC</p>
                  </div>
                </ItemBox>
              ))}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}
const Box = styled.div`
  box-sizing: border-box;
  min-width: 428px;
  max-width: 500px;
  padding: 50px 30px 40px 30px;
  border-radius: 16px;
  position: relative;
  background-color: white;
  z-index: 999;
  margin-top: 24px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #000000;
  #focus{
    border: 2px solid #E8E8E8;
    border-bottom: 0;
    z-index: 500;
    background-color: white;
    cursor: auto !important;
    color: #000000;
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 16px);
    min-width: 350px;
    padding: 50px 14px 30px 14px;
  }
`
const TopTitle = styled.span`
  font-size: 24px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  position: absolute;
  top: 24px;
  left: 30px;
  background-color: white;
  z-index: 9999;
  padding-right: 8px;
  color: #0A0A0A;
  font-weight: 700;
  letter-spacing: -.6px;
`
const TopTitleLine = styled.div`
  border-top: 1.8px solid #DCDCDC;
  position: absolute;
  width: calc(100% - 60px);
  top: 34px;
`
const HaveCash = styled.p`
  font-size: 36px;
  margin-top: 24px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  letter-spacing: -.4px;
  text-align: center;
`
const PaymentDetail = styled.div`
  position: relative;
  padding: 20px 0;
  width: 100%;
  height: auto;
  background-color: #3B3B3B;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const Detail = styled.div`
  width: 100%;
  display: flex;
  height: 70px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #FFFFFF;
  gap: 6px;
  p{
    font-size: 18px;
  }
  b{
    letter-spacing: -0.8px;
    font-size: 20px;
    margin-right: 2px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 600;
  }
  span{
    font-size: 16px;
    margin-top: 4px;
    color: #D7D7D7;
  }
`
const Tab = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 
  margin-top: 16px;
  padding-bottom: 8px;
  &::after{
    content: '';
    position: absolute;
    bottom:4px;
    left: 0;
    width: 50%;
    height: 4px;
    background-color: #E9446C;
    transition: all .1s ease-in-out;
  }
  &.use::after{
    transform: translateX(100%);
  }
`
const TabBox = styled.div`
  width: 100%;
  padding: 12px 0;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all .1s ease-in-out;
  &.active{
    color: #E9446C;
    cursor: auto;
  }
`

const List = styled.div`
  margin-top: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #F1F1F1;
  gap: 8px;
  &.hide{
    display: none;
  }
`
const ListItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #FFFFFF;
  .head{
    width: 100%;
    padding: 18px 8px;
    font-size: 20px;
    border-bottom: 1.8px solid #000000;
    display: flex;
    align-items: center;
    svg {
      position: absolute;
      right: 4px;
      cursor: pointer;
    }
  }
  div {
    margin-bottom: 18px;
  }
`
const ItemBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 8px;
  gap: 4px;
  .time{
    font-size: 18px;
    color: #a7a7a7;
  }
  .method{
    font-size: 22px;
    font-weight: bold;
  }
  .useMethod{
    font-size: 20px;
    font-weight: bold;
    color: #a7a7a7;
  }
  .amount{
    font-size: 20px;
  }
  .useAmount{
    font-size: 20px;
    margin-top: 12px;
    /* color: #a7a7a7; */
  }
  div{
    position: absolute;
    right: 4px;
    bottom: -8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    gap: 6px;
    .charge{
      font-size: 18px;
      color: #DD4C4C;
    }
    button{
      border: 1.4px solid #9d9d9d;
      outline: none;
      padding: 2px 6px;
      font-size: 16px;
      background-color: transparent;
      cursor: pointer;
    }
    .balancecount{
      font-size: 20px;
      letter-spacing: -.4px;
    }
    .balance{
      font-size: 20px;
      margin-top: 12px;
      letter-spacing: -.4px;
    }
  }
`