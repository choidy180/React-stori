import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";

export default function SaleTopBar(){
  const router = useLocation();
  const routerIndex = router.pathname.substring(router.pathname.lastIndexOf('/')+1);
  return(
    <TopBar>
      <Link to={"/sale/policy"}>
        <p className={routerIndex === "policy" ? "focusRouter" : ""}>판매정책 관리</p>
      </Link>
      <Link to={"/sale/episode"}>
        <p className={routerIndex === "episode" ? "focusRouter" : ""}>판매 스토리 추가 관리</p>
      </Link>
    </TopBar>
  )
}

const TopBar = styled.div`
  width: 100%;
  padding: 24px 42px;
  background-color: ${props => props.theme.boxColor};
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 22px;
  gap: 42px;
  p {
    padding: 6px 0;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    color: ${props => props.theme.textColor};
    text-decoration: none;
  }
  .focusRouter{
    border-bottom: 2px solid #E9446C;
    cursor: auto;
  }
  a:link{
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    padding: 14px 20px;
    border-radius: 0px;
  }
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`