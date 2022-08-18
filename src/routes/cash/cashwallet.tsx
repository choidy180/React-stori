import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import { AiOutlineRight } from '@react-icons/all-files/ai/AiOutlineRight'

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
  const listItems = [
    {
      date: "2022.07.31",
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
            <p style={{marginTop: "2px"}}>충전액 &gt;</p>
            <p><b>10</b>TC</p>
          </Detail>
          <Detail>
            <img id="cash_icon" src="images/icons/coinplus.svg" alt=""/>
            <p style={{marginTop: "-7px"}}>월구독액 &gt;</p>
            <p style={{marginTop: "-2px"}}><b>10</b>TC</p>
            <span>30일뒤 소멸 예정</span>
          </Detail>
          <Detail>
            <img id="cash_icon2" src="images/icons/CoinPlus2.svg" alt=""/>
            <p>적립액 &gt;</p>
            <p><b>10</b>TC</p>
          </Detail>
        </PaymentDetail>
        <List>
          {listItems.map((content, i) => (
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
  font-size: 18px;
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
  border-top: 1px solid #DCDCDC;
  position: absolute;
  width: calc(100% - 60px);
  top: 33px;
`
const HaveCash = styled.p`
  font-size: 32px;
  margin-top: 42px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  letter-spacing: -.4px;
  text-align: center;
`
const PaymentDetail = styled.div`
  position: relative;
  padding: 10px 0;
  width: 100%;
  height: auto;
  background-color: #3B3B3B;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
const Detail = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start !important;
  align-items: center;
  color: #FFFFFF;
  gap: 6px;
  font-size: 0.8rem;
  b{
    letter-spacing: -0.8px;
    font-size: 20px;
    margin-right: 2px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 600;
  }
  span{
    font-size: 12px;
    margin-top: -2px;
    color: #D7D7D7;
  }
`
const List = styled.div`
  margin-top: 12px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #F1F1F1;
  gap: 8px;
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
  .amount{
    font-size: 20px;
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
      font-size: 20px;
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
  }
`