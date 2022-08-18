import React from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../Nav';
import SaleTopBar from './saleTopBar';

export default function SaleBox(){
  const router = useLocation();
  const routerIndex = router.pathname.substring(router.pathname.lastIndexOf('/')+1);
  return (
    <>
      <NavBar title={
        routerIndex === "policy" ? "정책관리" : "스토리 추가 관리"
      }/>
      <Container>
        <SaleTopBar/>
        <Box>
          {/* 렌더링 위치 */}
          <Outlet />
        </Box>
      </Container>
    </>
  )
}
const Container = styled.div`
  padding: 20px 20px 30px 20px;
  max-width: 1500px;
  min-width: 1024px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  z-index: 5;
  @media screen and (max-width: 500px) {
    padding: 0px;
    padding-bottom: 20px;
  }
`
const Box = styled.div`
  width: 100%;
  padding: 20px 30px;
  background-color: ${props => props.theme.boxColor};
  border-radius: 12px;
`