import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BackLogoImage from '../components/BackLogoImage';
import NavBar from '../components/Nav';

export default function ContainerBox(){
  const router = useLocation();
  const routerIndex = router.pathname.substring(router.pathname.lastIndexOf('/')+1);
  return (
    <>
      <NavBar title={
        routerIndex === "topup" ? "TORI CASH TOPUP" :
        routerIndex === "checkout" ? "결제수단 선택" : ""
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