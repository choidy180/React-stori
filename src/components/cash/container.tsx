import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BackLogoImage from '../BackLogoImage';
import NavBar from '../Nav';

export default function ContainerBox(){
  const router = useLocation();
  console.log(router.pathname );
  return (
    <>
      <NavBar title={
        router.pathname === "/cash/topup" ? "토리캐시 충전" :
        router.pathname === "/cash/checkout" ? "결제 확인" : 
        router.pathname === "/cash/paymentdone" ? "결제완료" :
        router.pathname === "/cash/cashwallet" ? "나의 지갑" : ""
      }/>
      <Container>
        <BackLogoImage/>
        <Outlet/>
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
    padding: 12px 0px;
    padding-top: 0;
  }
`