import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import NavBar from '../components/Nav';

interface title {
  title: string;
}
export default function CheckOutSecond(title:title){
  return(
    <>
      <NavBar title={title.title}/>
      <Container>
        <HelmetProvider>
          <Helmet title={title.title}/>
        </HelmetProvider>
        <Box>
          <TopTitle>구매 상품명</TopTitle>
          {/* <TopTitleLine/> */}
          <ProductName>
            <p>100TC</p>
            <p>11,000원<span>(VAT포함)</span></p>
          </ProductName>
          <Means>결제 수단 선택</Means>
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
  padding: 54px 30px 40px 30px;
  border-radius: 16px;
  position: relative;
  background-color: white;
  z-index: 999;
  margin-top: 24px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: #000000;
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
`
const TopTitleLine = styled.div`
  border-top: 1px solid #0A0A0A;
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
  border-top: 1px solid rgb(149, 165, 166);
  border-bottom: 1px solid rgb(149, 165, 166);
  padding: 12px 0;
  margin-top: 12px;
  font-weight: 300;
  span {
    font-weight: 400;
    font-size: 16px;
  }
`
const Means = styled.p`
  font-size: 18px;
  margin-top: 32px;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
`