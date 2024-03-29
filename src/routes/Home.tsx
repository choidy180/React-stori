import React from 'react';
import styled from "styled-components"
import { Helmet, HelmetProvider } from "react-helmet-async";
import BackLogoImage from '../components/BackLogoImage';
import NavBar from '../components/Nav';

interface title {
  title: string;
}

export default function Home(title:title){
  return (
    <>
      <NavBar title={title.title}/>
      <Container>
        <HelmetProvider>
          <Helmet title="홈페이지"/>
        </HelmetProvider>
        <BackLogoImage/>
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
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  @media screen and (max-width: 500px) {
    padding: 12px 0px;
    padding-top: 0;
  }
`