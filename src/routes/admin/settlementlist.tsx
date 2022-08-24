import React, { useState } from 'react';
import styled from 'styled-components';
import { HiSortDescending } from '@react-icons/all-files/hi/HiSortDescending';

interface title {
  title: string;
}

// 정산 정책
interface calcCycle {
  cycle : string;
  lowestRate: number;
  highestRate: number;
  partnerTier: string;
  minimumAmount: number;
}
// 정산 통계
interface  calcStats {
  currentlyAvailable: number;
  cumulativeAvailable: number;
  currentApplication: number;
  cumulativeCompletion: number;
}

interface listData {
  appDate: string;
  seller: string;
  episodeCount: number;
  salesAmount: number;
  appAmount: number;
  salesAppStatus: boolean;
}

export default function AdminSettlementList({title}:title){
  // 정산정책
  const calcPolicy:calcCycle = {
    cycle : '매월 1일',
    lowestRate: 5,
    highestRate: 100,
    partnerTier: 'Partner 50',
    minimumAmount: 10
  }
  // 정산 통계
  const calcStats:calcStats = {
    currentlyAvailable: 1200,
    cumulativeAvailable: 12500,
    currentApplication: 150,
    cumulativeCompletion: 150,
  }
  // 리스트데이터
  const listData:listData[] = [
    {
      appDate:'2022-10-11',
      seller: 'Partner',
      episodeCount: 50,
      salesAmount: 2237000,
      appAmount: 237000,
      salesAppStatus: true,
    },
    {
      appDate:'2022-10-11',
      seller: 'Partner',
      episodeCount: 50,
      salesAmount: 2137000,
      appAmount: 237000,
      salesAppStatus: true,
    },
    {
      appDate:'2022-10-11',
      seller: 'Partner',
      episodeCount: 50,
      salesAmount: 2100000,
      appAmount: 237000,
      salesAppStatus: true,
    },
    {
      appDate:'2022-10-11',
      seller: 'Partner',
      episodeCount: 50,
      salesAmount: 237000,
      appAmount: 237000,
      salesAppStatus: true,
    },
  ]
  const commaNumber = (number:Number) => {
    return String(number).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  const [viewSort, setViewSort] = useState<Boolean>(false);
  const [criterion, setCriterion] = useState<String>("정산신청일순")
  const listViewOn = (event:any) => {
    event.preventDefault();
    setViewSort((e) => !e);
  }
  function sortCriterion(text:string){
    setViewSort((e) => !e);
    setCriterion(text);
  }
  return (
    <>
      <TopBar>
        <p>판매 정산 관리</p>
      </TopBar>
      <Box>
        <CalcBox>
          <h4 className='title'>정산 정책</h4>
          <p><span>정산 주기</span>{calcPolicy.cycle}</p>
          <p><span>정산 요율</span>{calcPolicy.lowestRate}% ~ {calcPolicy.highestRate}%</p>
          <p><span>파트너 티어</span>{calcPolicy.partnerTier}</p>
          <p><span>정산 가능 최소 금액</span>{calcPolicy.minimumAmount}만원 ({commaNumber(calcPolicy.minimumAmount * 100)}TC)</p>
        </CalcBox>
        <CalcBox style={{marginTop: "72px"}}>
          <h4 className='title'>정산 통계</h4>
          <p><span>현재 정산가능 판매자</span>{commaNumber(calcStats.currentlyAvailable)}</p>
          <p><span>누적 정산가능 판매자</span>{commaNumber(calcStats.cumulativeAvailable)}</p>
          <p><span>현재 정산신청 판매자</span>{commaNumber(calcStats.currentApplication)}</p>
          <p><span>누적 정산 완료자</span>{commaNumber(calcStats.currentApplication)}</p>
        </CalcBox>
        <ListBox>
          <List style={{
            marginTop: '48px',
          }}>
            <div className='number head'>No</div>
            <div className='head'>정산신청일</div>
            <div className='head'>판매자</div>
            <div className='head'>판매 EP수</div>
            <div className='head'>판매한 금액</div>
            <div className='head'>정산신청금액</div>
            <div className='head'>정산신청여부</div>
          </List>
          <div className='sort'>
            <p onClick={listViewOn}>
              <HiSortDescending/>
              <span>{criterion}</span>
            </p>
            <div className="sortSelectBox" style={!viewSort ? {display:"none"} : {display: "flex"}}>
              <p onClick={()=> sortCriterion("정산신청일순")}>정산신청일순</p>
              <p onClick={()=> sortCriterion("정산 완료만")}>정산 완료만</p>
              <p onClick={()=> sortCriterion("정산 신청만")}>정산 신청만</p>
              <p onClick={()=> sortCriterion("판매 금액순")}>판매 금액순</p>
              <p onClick={()=> sortCriterion("파트너레벨 순")}>파트너레벨 순</p>
            </div>
          </div>
          {listData.map((data, i) => (
            <List key={i}>
              <div className='number'>{i+1}</div>
              <div>{data.appDate}</div>
              <div>{data.seller}</div>
              <div>{data.episodeCount}</div>
              <div>{commaNumber(data.salesAmount)}</div>
              <div>{commaNumber(data.appAmount)}</div>
              <div>{data.salesAppStatus ? "가능" : "불가능"}</div>
            </List>
          ))}
        </ListBox>
      </Box>
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
const TopBar = styled.div`
  width: 100%;
  background-color: ${props => props.theme.boxColor};
  border-radius: 15px;
  color: ${props => props.theme.textColor};
  padding: 32px 42px;
  p{
    font-family: 'Pretendard-SemiBold';
    width: 100%;
    font-size: 24px;
  }
  @media screen and (max-width: 1024px) {
    padding: 20px;
    border-radius: 0px;
  }
`
const Box = styled.div`
  width: 100%;
  padding: 32px 42px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.theme.boxColor};
  border-radius: 15px;
  @media screen and (max-width: 1024px) {
    padding: 20px;
    border-radius: 0px;
  }
`
const CalcBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  .title{
    width: 100%;
    font-size: 22px;
    padding-bottom: 12px;
    font-weight: bold;
    border-bottom: 2px solid ${props => props.theme.bgColor};
    font-family: 'Pretendard-Medium';
    margin-bottom: 14px;
  }
  p{
    width: calc(50% - 2px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8.5px 0;
    padding-left: 205px;
    font-size: 20px;
    span{
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      color: ${props => props.theme.textColor2};
    }
  }
`
const ListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 64px;
  div{
    background-color: ${props => props.theme.bgColor};
  }
  .sort{
    position: absolute;
    right: 6px;
    top: 12px;
    background-color: transparent;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 9999;
    cursor: pointer;
    p {
      display: flex;
      align-items: center;
    }
    span{
      margin-top: -4px;
      font-size: 20px;
      margin-left: -2px;
    }
    div {
      width: auto;
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      border: 1.4px solid ${props => props.theme.textColor2};
      top: 12px;
      padding: 8px 0;
      border-radius: 12px;
      p{
        padding: 10px 14.5px;
        font-size: 18px;
        transition: all .1s ease-in-out;
      }
      p:hover{
        color: #DD4C4C;
      }
    }
    @media screen and (max-width: 1024px) {
      p{
        position: absolute;
        top: -50px;
        right: 0px;
      }
      .sortSelectBox{
        width: auto;
        height: 200px;
        top: -35px;
        p{
          position: relative;
          top: 0;
        }
      }
    }
  }
  svg{
    width: 32px;
    height: 32px;
  }
`
const List = styled.div`
  width: 100%;
  background-color: ${props => props.theme.bgColor};
  padding: 18px 0 12.5px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  font-family: 'Pretendard-Medium';
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    z-index: 99;
  }
  .number{
    width: 50%;
  }
  .head{
    font-size: 20px;
  }
  @media screen and (max-width: 1024px) {
    :nth-child(1){
      display: none;
    }
  }
`