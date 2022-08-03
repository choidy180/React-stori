import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '../../components/Nav';

interface title {
  title: string;
}

export default function SalesExamin({title}:title){
  const getData = [
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: true, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 0
    },
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: true, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 1
    },
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 2
    },
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 0
    },
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 1
    },
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 2
    },
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 0
    },
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 1
    },
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 2
    },
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 0
    },
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 1
    },
    {
      auditRequest: "IDX 01505", 
      title: "사랑과 악마", 
      new: false, 
      requestDate: "22.07.31 10:00",
      reviseDate: "22.07.31 10:00",
      state: 2
    },
  ]
  const [modal, setModal] = useState(false);
  const ModalView = () => {
    setModal((e) => !e);
  }
  return (
    <>
      <Container>
        <NavBar title={title}/>
        <TopBar>
          <p>운영관리</p>
        </TopBar>
        <Box>
          <HeadBox>
            <div className='topBox'>
              <p className='title'>심사요청번호</p>
            </div>
            <div className='topBox'>
              <p className='title'>시리즈 제목</p>
            </div>
            <div className='topBox'>
              <p className='title'>요청일시</p>
            </div>
            <div className='topBox'>
              <p className='title'>수정일시</p>
            </div>
            <div className='topBox'>
              <p className='title'>진행상태</p>
            </div>
            <div className='topBox'>
              <p className='title'>심사하기</p>
            </div>
          </HeadBox>
          {getData.map((content, i) => (
            <ContentLine key={i}>
              <div className='topBox'>
                <p className='requestAudit'>( {content.auditRequest} )</p>
              </div>
              <div className='topBox'>
                <p className='title'>{content.title}</p>
                {content.new ? <button className='newBtn'>New</button> : ""}
              </div>
              <div className='topBox'>
                <p className='requestDate'>{content.requestDate}</p>
              </div>
              <div className='topBox'>
                <p className='reviseDate'>{content.reviseDate}</p>
              </div>
              <div className='topBox'>
                {content.state === 0 ? 
                  <p className='state'>
                    <img src="/images/icons/request.svg" alt="" />
                    <span style={{marginTop: "2px"}}>요청중</span>
                  </p> 
                  : 
                  content.state === 1 ?
                  <p className='state'>
                    <img src="/images/icons/OnSale.svg" alt="" />
                    <span style={{marginTop: "2px"}}>판매중</span>
                  </p> : 
                  content.state === 2 ?
                  <p className='state'>
                    <img src="/images/icons/StopSale.svg" alt="" />
                    <span style={{marginTop: "2px"}}>판매중지</span>
                  </p> : ""
                }
              </div>
              <div className='topBox'>
                <button className='auditBtn btn' onClick={()=> setModal((e)=>!e)}>심사 하기</button>
              </div>
            </ContentLine>
          ))}
        </Box>
      </Container>
      <BlackBox 
        className={modal ? "on" : ""}
        onClick={()=> setModal((e)=>!e)}
      />
      <RightModal className={modal ? "on" : ""}>

      </RightModal>
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
    padding: 0px;
    padding-bottom: 20px;
  }
`
const TopBar = styled.div`
  width: 100%;
  color: ${props => props.theme.textColor};
  p{
    width: 100%;
    padding: 12px 0 12px 0;
    font-size: 24px;
    border-bottom: 1px solid ${props => props.theme.textColor2};
  }
`

const Box = styled.div`
  width: 100%;
`
const HeadBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 12px;
  background-color: ${props => props.theme.boxColor};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 12px;
  }
  .topBox{
    width: 100%;
  }
  .title{
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.textColor};
  }
`
const ContentLine = styled.div`
  margin-top: 6px;
  padding: 6px 0;
  background-color: ${props => props.theme.boxColor};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 12px;
    width: 100%;
  }
  .topBox{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    button {
      border: none;
      outline: none;
      border-radius: 24px;
      margin-left: 8px;
    }
  }
  .requestAudit{
    font-size: 12px;
    color: ${props => props.theme.textColor};
    letter-spacing: -.4px;
    word-spacing: -1.2px;
  }
  .title{
    font-size: 18px;
    letter-spacing: -1px;
  }
  .requestDate{
    font-size: 16px;
    letter-spacing: -.2px;
    color: ${props => props.theme.textColor2};
  }
  .reviseDate{
    font-size: 16px;
    letter-spacing: -.2px;
    color: #FFAFAF;
  }
  .state{
    font-size: 16px;
    letter-spacing: -.2px;
    color: ${props => props.theme.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    img {
      width: 18px;
      height: 20px;
    }
  }
  .newBtn {
    padding: 4px 6px;
    color: #FFFFFF;
    background-color: #E9446C;
  }
  .auditBtn {
    background-color: #9f9f9f;
    padding: 6px 14px;
    color: #FFFFFF;
    font-size: 16px;
    cursor: pointer;
  }
`
const BlackBox = styled.div`
  position: fixed;
  display: none;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.6;
  &.on{
    display: block;
  }
`
const RightModal = styled.div`
  position: fixed;
  right: -500px;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.boxColor};
  border-left: 1.4px solid ${props => props.theme.textColor};
  width: 400px;
  min-height: 100vh;
  transition: all .2s ease-in-out;
  z-index: 999999;
  &.on{
    right: 0px;
  }
`

