import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ChevronBackOutline } from 'react-ionicons';
import styled from 'styled-components';
import BackLogoImage from '../components/BackLogoImage';
import NavBar from '../components/Nav';

interface title {
  title: string;
}
export default function PaymentDone(title:title){
  return(
    <>
      <NavBar title={title.title}/>
      <Container>
        <HelmetProvider>
          <Helmet title={title.title}/>
        </HelmetProvider>
        <BackLogoImage/>
        <Box>
          <TopTitle>결제 완료</TopTitle>
          <TopTitleLine/>
          <TitleText>결제가 완료 되었습니다.</TitleText>
          <img src="/images/logo/CheckCircle.svg" alt="" />
          <ProductName style={{marginTop: "44px"}}>
            <div>결제 내역</div>
            <div>11,000원(VAT포함)</div>
          </ProductName>
          <ProductName>
            <div>결제 방법</div>
            <div>신용카드</div>
          </ProductName>
          <ProductName>
            <div>결제 아이디</div>
            <div>moon@storicha.in</div>
          </ProductName>
          <button>나의 캐시 지갑 보기</button>
          <BackP>
            <ChevronBackOutline
              width={"20px"}
              height={"20px"}
              color={"#000000"}
            />
            돌아가기
          </BackP>
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
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    margin-top: 24px;
    width: 22%;
  }
  @media screen and (max-width: 500px) {
    width: calc(100% - 16px);
    min-width: 350px;
    padding: 50px 14px 30px 14px;
  }
  button {
    padding: 10px 28px;
    border-radius: 32px;
    font-size: 22px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    margin-top: 42px;
    border: 0;
    outline: none;
    color: #fff;
    background-color: #000000;
    cursor: pointer;
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
`
const TopTitleLine = styled.div`
  border-top: 1px solid #DCDCDC;
  position: absolute;
  width: calc(100% - 60px);
  top: 33px;
`
const TitleText = styled.p`
  width: 100%;
  font-size: 24px;
  margin-top: 80px;
  font-weight: 700;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  text-align: center;
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
  padding: 0 12px;
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
    justify-content: center;
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
const BackP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 32px;
  font-size: 20px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
`