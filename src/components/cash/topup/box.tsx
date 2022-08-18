import React from 'react';
import styled from 'styled-components';
import BackLogoImage from '../../BackLogoImage';
import NavBar from '../../Nav';

export default function CashTopupBox(){
  return (
    <>
      <NavBar title={"타이틀"}/>
      <Container>
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