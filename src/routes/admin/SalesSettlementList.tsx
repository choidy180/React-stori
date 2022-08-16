import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/Nav';

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
}

export default function SalesSettlementList({title}:title){
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
  const commaNumber = (number:Number) => {
    return String(number).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <Container>
        <NavBar title={title}/>
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
        </Box>
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
    @media screen and (max-width: 1000px) {
      width: 100%;
    }
  }
`