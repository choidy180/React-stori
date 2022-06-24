import React, { useState } from 'react';
import styled from "styled-components"
import { Helmet, HelmetProvider } from "react-helmet-async";
import NavBar from '../components/Nav';
import BackLogoImage from '../components/BackLogoImage';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../recoil/theme';
import { darkTheme, lightTheme } from '../enum/ThemeEnums';

interface titleProps {
  title: string;
}

export default function Topup(title:titleProps){
  const isDark = useRecoilValue(isDarkAtom);
  const coinSelect = (event:any) => {
    console.log(event?.target);
  }
  return (
    <>
      <NavBar title={title.title}/>
      <Container>
        <HelmetProvider>
          <Helmet title={title.title}/>
        </HelmetProvider>
        <BackLogoImage/>
        <Box>
          <Title>나의 토리 캐시 잔액 <img src="images/icons/toriCoin.png" alt="" /> 50,00,222,111 <span>TC</span></Title>
          <TopupBoxTop>
            <Directly
              placeholder='0'
              type="text"
            />
            <button>구매하기</button>
            <span><b>CASH</b>직접입력</span>
          </TopupBoxTop>
          <TopupBox>
            <CoinBox onClick={coinSelect}>
              <div className='left'>
                <img src="images/icons/toriCoin.png" alt="" />
              </div>
              <div className='right'>
                <p>10개</p>
              </div>
              <div className='left'>
              </div>
              <div className='right'>
                <p>₩1,100</p>
              </div>
            </CoinBox>
            <CoinBox>
              <div className='left'>
                <img src="images/icons/toriCoin.png" alt="" />
              </div>
              <div className='right'>
                <p>50개</p>
              </div>
              <div className='left'>
              </div>
              <div className='right'>
                <p>₩5,500</p>
              </div>
            </CoinBox>
            <CoinBox>
              <div className='left'>
                <img src="images/icons/toriCoin.png" alt="" />
              </div>
              <div className='right'>
                <p>100개</p>
              </div>
              <div className='left'>
              </div>
              <div className='right'>
                <p>₩11,000</p>
              </div>
            </CoinBox>
            <CoinBox>
              <div className='left'>
                <img src="images/icons/toriCoin.png" alt="" />
              </div>
              <div className='right'>
                <p>150개</p>
              </div>
              <div className='left'>
                <p>10% 할인</p>
              </div>
              <div className='right'>
                <p>₩13,200</p>
              </div>
            </CoinBox>
            <CoinBox>
              <div className='left'>
                <img src="images/icons/toriCoin.png" alt="" />
              </div>
              <div className='right'>
                <p>300개</p>
              </div>
              <div className='left'>
                <p>15% 할인</p>
              </div>
              <div className='right'>
                <p>₩25,500</p>
              </div>
            </CoinBox>
            <CoinBox>
              <div className='left'>
                <img src="images/icons/toriCoin.png" alt="" />
              </div>
              <div className='right'>
                <p>500개</p>
              </div>
              <div className='left'>
                <p>30% 할인</p>
              </div>
              <div className='right'>
                <p>₩38,500</p>
              </div>
            </CoinBox>
          </TopupBox>
          <Semen>
            <p>월 자동 충전권</p>
            <p><span>210</span>CASH</p>
            <p><span>18,000원</span>(VAT포함)</p>
          </Semen>
          <SubText>
            <p>매월 결제 금액만큼 자동 충전 됩니다.</p>
            <p>결제를 취소하실 경우 익월 취소로 승인 됩니다.</p>
            <p>월자동충전권으로 결제한 캐쉬는 1개월간만 유효하며, 사용하지 않은 만큼 자동 소멸됩니다.</p> 
          </SubText>
        </Box>
      </Container>
    </>
  )
}

const Container = styled.div`
  padding: 0px 20px;
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
  padding: 40px 30px;
  border-radius: 16px;
  position: relative;
  background-color: ${props => props.theme.boxColor};
  z-index: 999;
  margin-top: 24px;
`
const Title = styled.p`
  font-size: 1rem;
  letter-spacing: -.6px;
  color: #141414;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    height: 1.15rem;
    margin: 0 8.5px 0 6.5px;
  }
  span {
    color: #DD4C4C;
  }
`
const TopupBoxTop = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  border-top: 1px solid #DCDCDC;
  padding: 12px 0;
  button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #070707;
    border-radius: 6px;
    padding: 6.5px 14px;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
  }
  span {
    position: absolute;
    top: 0;
    width: auto;
    left: 14px;
    background-color: ${props => props.theme.boxColor};
    color: #000000;
    padding: 4px 6px 4px 6px;
  }
  b {
    color: #DD4C4C;
    font-weight: bold;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }
`
const Directly = styled.input`
  width: 100%;
  padding: 7.5px 85px 7.5px 12px;
  border: 1px solid #DD4C4C;
  border-radius: 6px;
  font-size: 1.15rem;
  text-align: right;
  outline: none;
  background-color: ${props => props.theme.boxColor};;
`
const TopupBox = styled.div`
  position: relative;
  width: 100%;
  padding-top: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 8px;
`
const CoinBox = styled.div`
  width: 49%;
  border: 1px solid #DCDCDC;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  row-gap: 11px;
  font-size: 1.15rem;
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    width: 50%;
  }
  .left{
    justify-content: flex-start;
    p {
      font-size: 1rem;
      color: #F22A42;
    }
  }
  .right{
    justify-content: flex-end;
  }
  img{
    height: 1.25rem;
  }
  p{
    color: #000000;
  }
`
const Semen = styled.button`
  width: 100%;
  padding: 14px 20px;
  background-color: #212121;
  border-radius: 5px;
  margin-top: 14px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 8px;
  p{
    width: 40%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    font-size: 1rem;
  }
  span{
    font-size: 1.8rem;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
    font-weight: bold;
    margin-bottom: -4px;
    margin-right: 4px;
  }
  p:nth-child(1){
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.6rem;
  }
  p:nth-child(2){
    justify-content: flex-start;
  }
  p:nth-child(3){
    width: 60%;
    justify-content: flex-end;
  }
`
const SubText = styled.div`
  width: 100%;
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-size: 1rem;
    color: #8E8D8D;
    line-height: 1.25rem;
    letter-spacing: -.4px;
  }
`