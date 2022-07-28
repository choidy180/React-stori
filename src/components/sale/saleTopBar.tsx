import React from 'react';
import styled from "styled-components";

interface title {
  title: string;
}

export default function SaleTopBar({title}:title){
  const router = title;
  return(
    <TopBar>
      <p className={router === "salePolicy" ? "focusRouter" : ""}>판매정책 관리</p>
      <p>판매 스토리 추가 관리</p>
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
  }
  .focusRouter{
    border-bottom: 2px solid #E9446C;
    cursor: auto;
  }
`