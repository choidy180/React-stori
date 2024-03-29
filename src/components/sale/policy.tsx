import React, { useState } from 'react';
import { AddCircleOutline } from 'react-ionicons';
import styled from 'styled-components';
import {FiEdit} from "@react-icons/all-files/fi/FiEdit";
import {FaRegTrashAlt} from "@react-icons/all-files/fa/FaRegTrashAlt";

interface kind{
  kind: string;
}

export default function SalePolicyBox({kind}:kind){
  const [exception, setException] = useState(false);
  const [onModify, setOnModify] = useState(false);
  return(
    <>
      <Box>
        <>
          <Title>
            <img src="/images/icons/basicCost.svg" alt="" />
            기본 가격 판매정책
          </Title>
          <SubTitle>본 세트에 포함 되는 모든 에피소드를 단일한 가격으로 설정 합니다. 예외로 가격을 달리하고 싶은 에피소드가 있을 경우 아래 예외 가격 판매 정책에서 설정 하실 수 있습니다.</SubTitle>
          <BoundaryLine/>
          <AddPolicy>
            판매 정책 추가
            <AddCircleOutline
              width={"26px"}
              height={"26px"}
            />
          </AddPolicy>
          <PolicyBox>
            <div className='boxline'>
              사용여부
              <label className='toggler-wrapper style-1' style={{position: "absolute", right: "12px"}}>
                <input type="checkbox"/>
                <div className="toggler-slider">
                  <div className="toggler-knob"></div>
                </div>
              </label>
            </div>
            <div className='boxline'>
              판매 정책 제목
              <div className='box'>
                <input 
                  type="text" 
                  placeholder={"사랑과 악마"} 
                  readOnly={onModify ? false : true}
                />
              </div>
            </div>
            <div className='line'></div>
            <div className='boxline'>
              대여 정상가
              <div className='box'>
                <input 
                  type="text" 
                  placeholder={"10"} 
                  readOnly={onModify ? false : true}
                />
              </div>
            </div>
            <div className='boxline hot'>
              대여 할인가
              <div className='box'>
                <input 
                  type="text" 
                  placeholder={"8"} 
                  readOnly={onModify ? false : true}
                />
              </div>
            </div>
            <div className='boxline'>
              소장 정상가
              <div className='box'>
                <input 
                  type="text" 
                  placeholder={"10"} 
                  readOnly={onModify ? false : true}
                />
              </div>
            </div>
            <div className='boxline hot'>
              소장 할인가
              <div className='box'>
                <input 
                  type="text" 
                  placeholder={"8"} 
                  readOnly={onModify ? false : true}
                />
              </div>
            </div>
            <div className='boxline'>
              기다리면 무료
              <div className='box'>
                <label className='toggler-wrapper style-1' style={{marginLeft: "-20px"}}>
                  <input type="checkbox"/>
                  <div className="toggler-slider">
                    <div className="toggler-knob"></div>
                  </div>
                </label>
                <p>조회 후 2일 뒤</p>
              </div>
            </div>
            <div className='boxline'>
              사용시작
              <div className='box'>
                <p>2022-06-31</p>
              </div>
            </div>
            <div className='boxline'>
              사용종료
              <div className='box'>
                <p>2022-06-31</p>
              </div>
            </div>
            <BtnLine>
              <button onClick={()=>{
                setOnModify((e)=>!e);
                if(!onModify){
                  alert("이제부터 수정하실 수 있습니다.");
                }else{
                  alert("수정완료 되었습니다.");
                }
              }}>
                {!onModify ? "수정하기" : "수정완료"}
              </button>
              <button>삭제하기</button>
            </BtnLine>
          </PolicyBox>
          {kind === "basic" ? (
            <ExceptionSelect>
              <p>특정 에피소드만 예외가격으로 적용하고 싶나요?</p>
              <label className='toggler-wrapper style-1'>
                <input type="checkbox" onChange={()=> setException((e) => !e)} />
                <div className="toggler-slider">
                  <div className="toggler-knob"></div>
                </div>
              </label>
            </ExceptionSelect>
          ) : ""}
        </>
        <>
          <ExceptionBox className={exception ? 'exceptionBox' : ''}>
            <Title style={{marginTop: "36px"}}>
              <img src="/images/icons/exceptionCost.svg" alt=""  style={{width : "24px"}}/>
              예외 가격 판매 정책
            </Title>
            <SubTitle>기본 가격 판매정책 보다 더 높거나 낮게 판매하고 싶은 에피소드가 있을 경우 이곳에서 설정합니다.</SubTitle>
            <BoundaryLine/>
            <AddPolicy>
              판매 정책 추가
              <AddCircleOutline
                width={"26px"}
                height={"26px"}
              />
            </AddPolicy>
            <PolicyBox>
              <div className='boxline'>
                사용여부
                <label className='toggler-wrapper style-1' style={{position: "absolute", right: "12px"}}>
                  <input type="checkbox"/>
                  <div className="toggler-slider">
                    <div className="toggler-knob"></div>
                  </div>
                </label>
              </div>
              <div className='boxline'>
                판매 정책 제목
                <div className='box'>
                  <input 
                    type="text" 
                    placeholder={"사랑과 악마"} 
                    readOnly={onModify ? false : true}
                  />
                </div>
              </div>
              <div className='line'></div>
              <div className='boxline'>
                대여 정상가
                <div className='box'>
                  <input 
                    type="text" 
                    placeholder={"10"} 
                    readOnly={onModify ? false : true}
                  />
                </div>
              </div>
              <div className='boxline hot'>
                대여 할인가
                <div className='box'>
                  <input 
                    type="text" 
                    placeholder={"8"} 
                    readOnly={onModify ? false : true}
                  />
                </div>
              </div>
              <div className='boxline'>
                소장 정상가
                <div className='box'>
                  <input 
                    type="text" 
                    placeholder={"10"} 
                    readOnly={onModify ? false : true}
                  />
                </div>
              </div>
              <div className='boxline hot'>
                소장 할인가
                <div className='box'>
                  <input 
                    type="text" 
                    placeholder={"8"} 
                    readOnly={onModify ? false : true}
                  />
                </div>
              </div>
              <div className='boxline'>
                기다리면 무료
                <div className='box'>
                  <label className='toggler-wrapper style-1' style={{marginLeft: "-20px"}}>
                    <input type="checkbox"/>
                    <div className="toggler-slider">
                      <div className="toggler-knob"></div>
                    </div>
                  </label>
                  <p>조회 후 2일 뒤</p>
                </div>
              </div>
              <div className='boxline'>
                사용시작
                <div className='box'>
                  <p>2022-06-31</p>
                </div>
              </div>
              <div className='boxline'>
                사용종료
                <div className='box'>
                  <p>2022-06-31</p>
                </div>
              </div>
              <BtnLine>
                <span onClick={()=>{
                  setOnModify((e)=>!e);
                  if(!onModify){
                    alert("이제부터 수정하실 수 있습니다.");
                  }else{
                    alert("수정완료 되었습니다.");
                  }
                }}>
                  {!onModify ? "수정하기" : "수정완료"}
                </span>
                <FaRegTrashAlt/>
              </BtnLine>
            </PolicyBox>
          </ExceptionBox>
        </>
        <BottomBtnBox>
          <button>변경저장</button>
          <button>판매요청</button>
        </BottomBtnBox>
      </Box>
    </>
  )
}

const Box = styled.div`
  width: 100%;
  margin-top: 42px;
  .exceptionBox{
    display: flex;
  }
`
const Title = styled.p`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 22px;
  img{
    margin-right: 8px;
  }
`
const SubTitle = styled.p`
  max-width: 780px;
  font-size: 16px;
  line-height: 20px;
  margin-top: 24px;
  color: ${props => props.theme.textColor2};
`
const ExceptionSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 24px;
  font-size: 22px;
  margin-left: 4px;
  .toggler-wrapper {
    display: block;
    width: 40px;
    height: 20px;
    cursor: pointer;
    input[type="checkbox"] {
      display: none;
    }
    input[type="checkbox"]:checked+.toggler-slider {
      background-color: #E9446C;
    }
    .toggler-slider{
      background-color: #282828;
      position: absolute;
      border-radius: 100px;
      top: 0;
      left: 10px;
      width: 100%;
      height: 100%;
      -webkit-transition: all 300ms ease;
      transition: all 300ms ease;
    }
  }
  .toggler-wrapper.style-1 {
    input[type="checkbox"]:checked+.toggler-slider .toggler-knob {
      left: calc(100% - 14px - 3px);
    }
    .toggler-knob {
      width: calc(20px - 6px);
      height: calc(20px - 6px);
      border-radius: 50%;
      left: 3px;
      top: 3px;
      background-color: #fff;
    }
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
const BoundaryLine = styled.div`
  width: 100%;
  border-top: 4px solid ${props => props.theme.bgColor};
  margin-top: 16px;
`
const AddPolicy = styled.p`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
  margin-top: 12px;
  span{
    margin-left: 8px;
    svg {
      color: ${props => props.theme.textColor};
    }
  }
`
const PolicyBox = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${props => props.theme.bgColor};
  margin-top: 12px;
  border-radius: 8px;
  gap: 16px;
  font-size: 20px;
  font-weight: bold;
  .boxline {
    width: 100%;
    height: 36px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: ${props => props.theme.textColor};
    .box {
      width: calc(100% - 400px);
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      padding: 8.5px 14px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: ${props => props.theme.boxColor};
      border-radius: 4px;
      color: ${props => props.theme.textColor};
      font-weight: 500;
      font-size: 18px;
      .toggler-wrapper {
        display: block;
        width: 40px;
        height: 20px;
        margin-right: 20px;
        cursor: pointer;
        input[type="checkbox"] {
          display: none;
        }
        input[type="checkbox"]:checked+.toggler-slider {
          background-color: #E9446C;
        }
        .toggler-slider{
          background-color: #7d7d7d;
          position: absolute;
          border-radius: 100px;
          top: 0;
          left: 10px;
          width: 100%;
          height: 100%;
          -webkit-transition: all 300ms ease;
          transition: all 300ms ease;
        }
      }
      .toggler-wrapper.style-1 {
        input[type="checkbox"]:checked+.toggler-slider .toggler-knob {
          left: calc(100% - 14px - 3px);
        }
        .toggler-knob {
          width: calc(20px - 6px);
          height: calc(20px - 6px);
          border-radius: 50%;
          left: 3px;
          top: 3px;
          background-color: #fff;
        }
      }
      p {
        line-height: 20px;
        margin-top: 2px;
      }
      input {
        background-color: transparent;
        border: none;
        outline: none;
        text-align: right;
        color: ${props => props.theme.textColor};
        font-size: 18px;
        ::placeholder{
          color: ${props => props.theme.textColor};
        }
      }
      @media screen and (max-width: 768px) {
        width: calc(100% - 200px);
        font-size: 16px;
      }
      @media screen and (max-width: 500px) {
        width: calc(100% - 130px);
      }
    }
    .toggler-wrapper {
      display: block;
      width: 40px;
      height: 20px;
      cursor: pointer;
      input[type="checkbox"] {
        display: none;
      }
      input[type="checkbox"]:checked+.toggler-slider {
        background-color: #E9446C;
      }
      .toggler-slider{
        background-color: #7d7d7d;
        position: absolute;
        border-radius: 100px;
        top: 0;
        left: 10px;
        width: 100%;
        height: 100%;
        -webkit-transition: all 300ms ease;
        transition: all 300ms ease;
      }
    }
    .toggler-wrapper.style-1 {
      input[type="checkbox"]:checked+.toggler-slider .toggler-knob {
        left: calc(100% - 14px - 3px);
      }
      .toggler-knob {
        width: calc(20px - 6px);
        height: calc(20px - 6px);
        border-radius: 50%;
        left: 3px;
        top: 3px;
        background-color: #fff;
      }
    }
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  .line{
    width: 100%;
    border-top: 4px solid ${props => props.theme.boxColor};
  }
  .hot {
    color: #E9446C;
  }
`
const BtnLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  margin-top: 8px;
  padding-right: 6px;
  button{
    color: white;
    cursor: pointer;
    font-size: 18px;
    padding: 4px 64px;
    border-radius: 6px;
    background-color: ${props => props.theme.boxColor};
    border: 1.8px solid ${props => props.theme.textColor2};
    @media screen and (max-width: 500px) {
      padding: 4px 32px;
    }
    @media screen and (max-width: 380px) {
      padding: 4px 16px;
    }
  }
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

`
const ExceptionBox = styled.div`
  display: none;
  flex-direction: column;
`
const BottomBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  button {
    width: calc(50% - 18px);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 28px;
    font-size: 22px;
    padding: 9.5px 0;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: 600;
  }
  button:nth-child(1){
    background-color: #E9446C;
    color: #FFFFFF;
  }
`