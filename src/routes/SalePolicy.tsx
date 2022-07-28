import React from 'react';
import { Ellipse, EllipseOutline, EllipseSharp, WalletOutline } from 'react-ionicons';
import styled from "styled-components";
import NavBar from '../components/Nav';
import SaleTopBar from "../components/sale/saleTopBar";

interface title {
  title: string;
}
type IProgress = {
  state: string, 
  complete: number, // 시작전: 0, 진행중: 1, 완료: 2
  request: boolean // 요청완료: true, 요청진행중: false  
};

export default function SalePolicy(title:title){
  const contentData = {
    title: "사랑과 악마",
  }
  const Progress: IProgress[] = [
    {state: "작성중", complete: 2, request: true},
    {state: "검수중", complete: 2, request: true},
    {state: "수정요청", complete: 2, request: true},
    {state: "검수완료", complete: 1, request: true},
    {state: "판매시작", complete: 0, request: true},
    {state: "판매중지", complete: 0, request: true},

  ]
  return(
    <>
      <NavBar title={title.title}/>
      <Container>
        <SaleTopBar title={title.title}/>
        <Box>
          <TopLine>
            <TitleImgBox>
              <img src="images/Illustration/5a345987bf1dda7b5d93c2971f8f4975.png" alt="" />
            </TitleImgBox>
            <TitleTextBox>
              <h2>{contentData.title}</h2>
              <p>최종 임시 저장일 2022-06-31 11:00<br/>최종 판매 승인일 2022-06-31 11:00</p>
            </TitleTextBox>
            <TopLightBox>
              <button>
                <WalletOutline
                  width={"22px"}
                  height={"22px"}
                />
                내 책상
              </button>
              <p><span>배급사</span> 씨엠닉스</p>
              <p><span>진행현황</span> 진행중</p>
            </TopLightBox>
          </TopLine>
          <ProgressBarBox>
            {Progress.map((progress, i) => {
              if(progress.complete === 0){
                return (
                  <Line>
                    <ProgressBox key={i}>
                        <EllipseOutline
                          width={"64px"}
                          height={"64px"}
                          color={"#D7D7D7"}
                        />
                        <p>{progress.state}</p>
                    </ProgressBox>
                    {i !== 5 ?
                      (<BarLine>

                      </BarLine>): ""
                    }
                  </Line>
                )
              } else if (progress.complete === 1){
                return (
                  <Line>
                    <ProgressBox key={i}>
                        <EllipseOutline
                          width={"64px"}
                          height={"64px"}
                          color={"#E9446C"}
                        />
                        <p>{progress.state}</p>
                    </ProgressBox>
                    {i !== 5 ?
                      (<BarLine>
                        
                      </BarLine>): ""
                    }
                  </Line>
                )
              } else if (progress.complete === 2){
                return (
                  <Line>
                    <ProgressBox key={i}>
                        <Ellipse
                          width={"64px"}
                          height={"64px"}
                          color={"#E9446C"}
                        />
                        <p>{progress.state}</p>
                    </ProgressBox>
                    {i !== 5 ?
                      (<BarLine>
                        
                      </BarLine>): ""
                    }
                  </Line>
                )
              }
            })}
          </ProgressBarBox>
        </Box>
      </Container>
    </>
  )
}

const Container = styled.div`
  padding: 20px 20px 30px 20px;
  max-width: 1500px;
  min-width: 1024px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
  z-index: 5;
  @media screen and (max-width: 500px) {
    padding: 0px;
    padding-bottom: 20px;
  }
`
const Box = styled.div`
  width: 100%;
  padding: 20px 30px;
  background-color: ${props => props.theme.boxColor};
  border-radius: 12px;
`
const TopLine = styled.div`
  width: 100%;
  padding-right: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`
const TitleImgBox = styled.div`
  width: 200px;
  height: 290px;
  border-radius: 12px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const TitleTextBox = styled.div`
  width: calc(100% - 218px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 18px;
  padding-top: 8px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  p {
    margin-top: 18px;
    line-height: 24px;
    font-size: 16px;
    color: ${props => props.theme.textColor2};
  }
`
const TopLightBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  button {
    padding: 6px 14px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9F9F9F;
    border: none;
    outline: none;
    cursor: pointer;
    color: #FFFFFF;
    border-radius: 24px;
    span{
      color: #FFFFFF;
      margin-right: 4px;
      svg{
        color: #FFFFFF;
        fill: #FFFFFF;;
      }
    }
    margin-bottom: 18px;
  }
  p {
    color: ${props => props.theme.textColor};
    span {
      color: ${props => props.theme.textColor2};
    }
  }
  p:nth-child(3){
    margin-top: 6px;
  }
`
const ProgressBarBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`
const Line = styled.div`
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`
const ProgressBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  gap: 8px;
`

const BarLine = styled.div`
  width: 100%;
  margin-top: 30px;
  min-width: 72px;
  border-top: 4px solid ${props => props.theme.textColor2};
`