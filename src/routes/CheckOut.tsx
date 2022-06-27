import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import NavBar from '../components/Nav';

interface title {
  title: string;
}
export default function CheckOut(title:title){
  return(
    <>
      <NavBar title={title.title}/>
      <Container>
        <HelmetProvider>
          <Helmet title={title.title}/>
        </HelmetProvider>
        <Box>
          <TopTitle>구매 상품명</TopTitle>
          <TopTitleLine/>
          <ProductName style={{marginTop: "32px"}}>
            <div>상품명</div>
            <div>100TC</div>
          </ProductName>
          <ProductName style={{marginTop: "12px"}}>
            <div>가격</div>
            <div>11,000원<span>(VAT포함)</span></div>
          </ProductName>
          <Means>
            <MeasLeft>결제 방법</MeasLeft>
            <ItemBox>
              <div>
                <input type="radio" id="credit" className="select-radio" name="select" value="신용카드"/>
                <label className="label-select" htmlFor='credit'>신용카드</label>
              </div>
              <div>
                <input type="radio" id="phone"  className="select-radio" name="select" value="휴대폰"/>
                <label className="label-select" htmlFor="phone">휴대폰</label>
              </div>
              <div>
                <input type="radio" id="account"  className="select-radio" name="select" value="계좌이체"/>
                <label className="label-select" htmlFor="account">계좌이체</label>
              </div>
              <div>
                <input type="radio" id="toss"  className="select-radio" name="select" value="토스"/>
                <label className="label-select" htmlFor="toss">토스</label>
              </div>
              <div>
                <input type="radio" id="naver"  className="select-radio" name="select" value="네이버페이"/>
                <label className="label-select" htmlFor="naver">네이버페이</label>
              </div>
              <div>
                <input type="radio" id="point"  className="select-radio" name="select" value="포인트"/>
                <label className="label-select" htmlFor="point">포인트</label>
              </div>
              <div>
                <input type="radio" id="kakao"  className="select-radio" name="select" value="카카오페이"/>
                <label className="label-select" htmlFor="kakao">카카오페이</label>
              </div>
            </ItemBox>
          </Means>
          <ProductName style={{marginTop: "12px"}}>
            <div>결제 아이디</div>
            <div>moon@storicha.in</div>
          </ProductName>
          <ButtonBox>
            <button>결제하기</button>
            <button>취소하기</button>
          </ButtonBox>
          <SubulTitle>구매 전 필수 유의사항</SubulTitle>
          <Subul>
            <li>구매한 캐시의 유효기간은 구입일로부터 5년간 입니다.</li>
            <li>캐시 구매/ 이용내역은 마이 페이지 토리캐시 지갑에서 확인이 가능합니다.</li>
            <li>150개 이상 구매시 결제 방법에 따라 보너스 캐시를 제공할 수 있습니다. <br/>(신용카드1%,계좌이체2%,가상계좌2%,무통장입금3%)</li>
            <li>캐시구매 한도가 초과한 경우 구매 불가 합니다. (일 :10,000개 / 월 : 400,000개)</li>
            <li>캐시구매 한도가 초과한 경우 선물이 불가합니다. (일 : 95,000개 / 월 : 300,000개)당일 한도는 23시59분59초 / 당월 한도는 매월 말일까지 적용 됩니다.</li>
            <li>미성년자 가입자는 캐시 및 유료 아이템을 구매할 수 없습니다.</li>
            <li>법정 대리인의 동의 없이 미성년자 명의로 결제한 캐시는 환불이 가능합니다.</li>
            <li>사용하지 않은 캐시에 한에 구매 후 7일 이내 청약철회가 가능하며, 1:1문의 게시판에 신청해 주시기 바랍니다.</li>
            <li>유료아이템의 내용 표시. 광고의 내용과 다르거나 계약 내용과 다게 이행된 경우에는 해당 유료 아이템을 공급받은 날부터 3개월 이내, 그 사실을 안 날 또는 알수 있었던 날부터 30일 이내 청약 철회가 가능 합니다.</li>
          </Subul>
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
`
const TopTitleLine = styled.div`
  border-top: 1px solid #DCDCDC;
  position: absolute;
  width: calc(100% - 60px);
  top: 33px;
`
const ProductName = styled.div`
  font-size: 22px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  font-weight: 300;
  div:nth-child(1){
    width: 140px;
    padding: 12px;
    font-size: 16px;
    background-color: #EEEEEE;
    color: #666666;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div:nth-child(2){
    width: calc(100% - 160px);
    font-size: 18px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #DCDCDC;
    border-bottom: 1px solid #DCDCDC;
    height: 100%;
    padding: 10px 0;
    font-weight: 500;
  }
  span{
    font-weight: 500;
    font-size: 12px;
    margin-bottom: -2px;
  }
`
const Means = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`
const MeasLeft = styled.div`
  width: 140px;
  padding: 12px;
  font-size: 16px;
  background-color: #EEEEEE;
  color: #505050;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;  
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  height: 133px;
`
const ItemBox = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  border-top: 1px solid #DCDCDC;
  border-bottom: 1px solid #DCDCDC;
  justify-content: flex-start;
  row-gap: 4px;
  width: calc(100% - 160px);
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  padding: 8px 0;
  div {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 4px 0;
    background-color: transparent;
    color: #BDBDBD;
  }
  input {
    margin-left: 6px;
  }
  .label-select{
    display: flex;
    align-items: center; 
    cursor: pointer;
    font-size:18px;
  }
  .label-select::after{
    content: ""; 
    display: flex; 
    width: 10px; 
    height: 10px; 
    background: #ffffff; 
    border: 3px solid #e0e0e0; 
    margin-top: -4px;
    margin-left: 3px;
  }
  .label-select::after{
    border-radius: 50%;
  }
  .select-radio{
    display: none;
  }
  .select-radio:checked + .label-select::after{
    background: #f00;
  }
  .select-radio:checked + .label-select{
    color: #141414;
  }
`
const SubulTitle = styled.p`
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  margin-top: 32px;
`
const Subul = styled.ul`
  font-size: 14px;
  line-height: 19px;
  list-style-type: disc;
  padding-left: 18px;
  li:nth-child(1){
    margin-top: 16px;
  }
  li {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    color: #000000;
  }
`
const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  button{
    width: 49%;
    padding: 12px;
    border-radius: 32px;
    border: none;
    outline: none;
    color: #fff;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
  }
  button:nth-child(1){
    background-color: #0A0A0A;
  }
  button:nth-child(2){
    background-color: #BEBEBE;
  }
`