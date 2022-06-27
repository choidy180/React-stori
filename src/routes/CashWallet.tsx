import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import NavBar from '../components/Nav';

interface title {
  title: string;
}
export default function CashWallet(title:title){
  return(
    <>
      <NavBar title={title.title}/>
      <Container>
        <HelmetProvider>
          <Helmet title={title.title}/>
        </HelmetProvider>
        <Box>

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