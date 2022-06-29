import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ChevronDownOutline } from 'react-ionicons';
import styled from 'styled-components';
import NavBar from '../components/Nav';

interface title {
  title: string;
}
export default function CashWallet(title:title){
  const focusChange = (event:any) => {
    if(event.currentTarget.id === "non_focus"){
      document.getElementById("focus")!.id = "non_focus";
      event.currentTarget.id = "focus";
      let receipt = document.getElementById('breakDownPayment');
      if(receipt!.children[1].id == "focus_receipt"){
        receipt!.children[1].id = "non_focus_receipt";
        receipt!.children[2].id = "focus_receipt";
      } else {
        receipt!.children[2].id = "non_focus_receipt";
        receipt!.children[1].id = "focus_receipt";
      }
    } 
  }
  return(
    <>
      <NavBar title={title.title}/>
      <Container>
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

          <BreakDown>
            <BreakDownPayment id='breakDownPayment'>
              <div>
                <BreakDownHead id="focus" onClick={focusChange}>
                  <p>결제 내역</p>
                </BreakDownHead>
                <BreakDownHead id="non_focus" onClick={focusChange}>
                  <p>사용 내역</p>
                </BreakDownHead>
              </div>
              <Receipt id="focus_receipt">
                <div className="date">
                  <HeadTitle>결제 일시</HeadTitle>
                  <p>22.05.31. 16:00</p>
                  <p>22.05.31. 16:00</p>
                  <p>22.05.31. 16:00</p>
                  <p>22.05.31. 16:00</p>
                </div>
                <div className="price">
                  <HeadTitle>결제 금액</HeadTitle>
                  <p>13,200</p>
                  <p>13,200</p>
                  <p>13,200</p>
                  <p>13,200</p>
                </div>
                <div className="way">
                  <HeadTitle>방식</HeadTitle>
                  <p>신용카드</p>
                  <p>계좌이체</p>
                  <p>보너스지급</p>
                  <p>토스</p>
                </div>
                <div className="charging">
                  <HeadTitle>충전액</HeadTitle>
                  <p>155</p>
                  <p>155</p>
                  <p>155</p>
                  <p>155</p>
                </div>
              </Receipt>
              <Receipt id="non_focus_receipt" style={{flexDirection: "column"}}>
                <ContentBox className='box2'>
                  <div className="div1">
                    <div>22.07.31 13:31</div>
                    <div>사용</div>
                  </div>
                  <div className="div2">
                  </div>
                  <div className="div3">
                    <div className="storyName">만료</div>
                    <div className="div3Coin">-210 TC</div>
                  </div>
                  <div className="div4">
                    <div className="episode">미 사용분 자동 소멸</div>
                    <div className="totalCoin"><b>잔액</b>200,000,000,000TC</div>
                  </div>
                </ContentBox>
                <ContentBox>
                  <div className="div1">
                    <div>22.07.31 13:31</div>
                    <div>사용</div>
                  </div>
                  <div className="div2">
                  </div>
                  <div className="div3">
                    <div className="storyName">렌탈그녀</div>
                    <div className="div3Coin">-12 TC</div>
                  </div>
                  <div className="div4">
                    <div className="episode">1부-소장-울지 못해서 운다</div>
                    <div className="totalCoin"><b>잔액</b>203TC</div>
                  </div>
                </ContentBox>
                <ContentBox>
                  <div className="div1">
                    <div>22.06.09 18:00</div>
                    <div>사용</div>
                  </div>
                  <div className="div2">
                  </div>
                  <div className="div3">
                    <div className="storyName">렌탈그녀</div>
                    <div className="div3Coin">-6 TC</div>
                  </div>
                  <div className="div4">
                    <div className="episode">1부-대여-울지 못해서 운다</div>
                    <div className="totalCoin"><b>잔액</b>20,312TC</div>
                  </div>
                </ContentBox>
                <ContentBox>
                  <div className="div1">
                    <div>22.06.05 14:00</div>
                    <div>사용</div>
                  </div>
                  <div className="div2">
                  </div>
                  <div className="div3">
                    <div className="storyName">보너스</div>
                    <div className="div3Coin" id="addCoin">+100 TC</div>
                  </div>
                  <div className="div4">
                    <div className="episode">운영자 감사의 의미</div>
                    <div className="totalCoin"><b>잔액</b>20,312TC</div>
                  </div>
                </ContentBox>
                <ContentBox>
                  <div className="div1">
                    <div>22.06.01 19:00</div>
                    <div>사용</div>
                  </div>
                  <div className="div2">
                    <div className="chargeDetail">충전(신용카드)</div>
                    <div></div>
                  </div>
                  <div className="div3">
                    <div className="storyName">보너스</div>
                    <div className="div3Coin" id="addCoin">+210 TC</div>
                  </div>
                  <div className="div4">
                    <div className="episode">월 자동구매</div>
                    <div className="totalCoin"><b>잔액</b>20,210TC</div>
                  </div>
                </ContentBox>
              </Receipt>
            </BreakDownPayment>
            <MoreView>
              <p>결제내역 더보기</p>
              <ChevronDownOutline
                width={"24px"}
                height={"24px"}
                color={"A0A0A0"}
              />
            </MoreView>
          </BreakDown>
        </Box>
      </Container>
    </>
  )
}
const Container = styled.div`
  padding: 0px 20px 30px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: 0px;
    padding-bottom: 20px;
  }
`
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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
  border-radius: 4px;
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
const BreakDown = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 200px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const BreakDownPayment = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  width: 100%;
  height: auto;
  div{
    width: 100%;
    display: flex;
  }
  #focus_receipt{
    z-index: 300;
    height: auto;
    padding: 15px 10px;
    border: 2px solid #E8E8E8;
  }
  #non_focus_receipt{
    display: none;
  }
`
const BreakDownHead = styled.div`
  position: relative;
  padding: 12px 0;
  width: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border: 2px solid #F4F4F4;
  border-bottom: 0;
  background-color: #F4F4F4;
  color: #787878;
  cursor: pointer;
  p{
    font-size: 1rem;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: 700;
  }
`
const Receipt = styled.div`
  position: relative;
  z-index: 100;
  margin-top: -2px ;
  width: calc(100% - 24px);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  background-color: white;
  display: flex;
  height: auto;
  overflow: hidden;
  justify-content: space-between;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 5px; */
  div{
    width: 100%;
    flex-direction: column;
  }
  p{
    letter-spacing: -0.9px;
    font-size: 0.72rem;
    margin-top: 10px;
  }
  .box2 div{
    flex-direction: row;
  }
`
const HeadTitle = styled.p`
  width: 100%;
  color: #A0A0A0;
  padding-bottom: 15px;
  border-bottom: 1.4px solid #DCDCDC;
  font-size: 0.9rem;
  margin-top: 0px;
`
const ContentBox = styled.div`
  width: 100%;
  height: auto;
  padding: 5px 0;
  display: flex;
  flex-direction: column !important;
  gap: 4px;
  border-bottom: 1px solid #D7D7D7;
  :last-child{
    border-bottom: 0;
  }
  div{
    width: 100%;
    height: 17px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  div:nth-child(1){
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  div:nth-child(2){
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .div1:nth-child(1){
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 0.8rem;
    letter-spacing: -0.5px;
    color: #A0A0A0;
  }
  .div1:nth-child(2){
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 1rem;
    letter-spacing: -0.5px;
    color: #A0A0A0;
  }
  .div2 .chargeDetail{
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 0.8rem;
    color: #292929;
  }
  .div3 .storyName{
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 0.8rem;
    color: #292929;
  }
  .div3 .div3Coin{
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 0.8rem;
    color: #889AF8;
    letter-spacing: -0.6px;
  }
  .div4 .episode{
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 0.8rem;
    color: #292929;
  }
  .div4 .totalCoin{
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 0.8rem;
    color: #292929;
  }
  .div4 .totalCoin b{
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 0.8rem;
    color: #A0A0A0;
    margin-right: 4px;
  } 
`
const MoreView= styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  color: #A0A0A0;
  svg{
    cursor: pointer;
  }
`