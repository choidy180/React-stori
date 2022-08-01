import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

interface title {
  title: string;
}

export default function SaleTopBar({title}:title){
  const router = title;
  return(
    <TopBar>
      <Link to={"/salePolicy"}>
        <p className={router === "salePolicy" ? "focusRouter" : ""}>판매정책 관리</p>
      </Link>
      <Link to={"/SaleEpisode"}>
        <p className={router === "SaleEpisode" ? "focusRouter" : ""}>판매 스토리 추가 관리</p>
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
`