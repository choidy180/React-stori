import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../Nav';

export default function AdminBox(){
  const router = useLocation();
  const routerIndex = router.pathname.substring(router.pathname.lastIndexOf('/')+1);
  return (
    <>
      <NavBar title={routerIndex}/>
      <Container>
        <Outlet/>
      </Container>
    </>
  )
}
const Container = styled.div`
  padding: 0px 20px 30px 20px;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  @media screen and (max-width: 500px) {
    padding: 0;
    padding-bottom: 20px;
  }
`