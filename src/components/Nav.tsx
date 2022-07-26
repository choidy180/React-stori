import React from 'react';
import { useState } from 'react';
import { ChevronDownOutline, MoonOutline, PersonCircleOutline, SunnyOutline } from 'react-ionicons';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from "styled-components"
import { darkTheme, lightTheme } from '../enum/ThemeEnums';
import { isDarkAtom } from '../recoil/theme';

interface titleProps{
  title: string;
}

export default function NavBar({title}:titleProps){
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const isDark = useRecoilValue(isDarkAtom);
  const [theme, useTheme] = useState(isDark ? darkTheme : lightTheme);
  const toggleDarkAtom = () => {
    setDarkAtom((e) => !e);
    setViewBox((e) => !e);
  };
  const [viewBox, setViewBox] = useState(false);
  return (
    <Container>
      <Left>
        <img src="Logo.svg" alt="" />
      </Left>
      <Center>
        <p>{title}</p>
      </Center>
      <Right>
        <UserImage>
          <img src="images/F6CB11C6-6E14-4B87-BE43-AF2493348A20_1_105_c.png" alt="" />
        </UserImage>
        <UserEmail onClick={()=> setViewBox((e) => !e)}>
          minseok@storicha.in
          <ChevronDownOutline
            color={theme.textColor}
            width={"20px"}
            height={"20px"}
            cssClasses={viewBox ? "viewOn" : ""}
          />
        </UserEmail>
        {viewBox && (
          <ViewWrapper>
          <div 
            className='WrapperBox'
            onClick={()=> setViewBox((e)=> !e)}
          >
            <PersonCircleOutline
              width={"42px"}
              height={"42px"}
            />
            <p>나의 프로필<br/><span>나를 소개하기 지원 받기</span></p>
          </div>
          <div 
            className='WrapperBox'
            onClick={()=> setViewBox((e)=> !e)}
          >
            <PersonCircleOutline
              width={"42px"}
              height={"42px"}
            />
            <p>롤 체인지<br/><span>롤체인지</span></p>
          </div>
          <div 
            className='WrapperBox'
            onClick={()=> setViewBox((e)=> !e)}
          >
            <PersonCircleOutline
              width={"42px"}
              height={"42px"}
            />
            <p>설정<br/><span>계정 정보, 언어 및 취향</span></p>
          </div>
          <div 
            className='WrapperBox'
            onClick={()=> setViewBox((e)=> !e)}
          >
            <PersonCircleOutline
              width={"42px"}
              height={"42px"}
            />
            <p>부가정보</p>
          </div>
            <div 
              className='WrapperBox'
              onClick={toggleDarkAtom}
            > 
              {!isDark ? 
                <>
                  <MoonOutline
                  width={"42px"}
                  height={"42px"}
                  />
                  <p>어두운 테마 선택</p>
                </>
              : 
                <>
                  <SunnyOutline
                    width={"42px"}
                    height={"42px"}
                  />
                  <p>밝은 테마 선택</p>
                </>
              }
            </div>
          </ViewWrapper>
        )}
      </Right>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 14px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 8px;
  }
`
const Left = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 12px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'NEXON Lv1 Gothic OTF Bold';
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    line-height: 1.4rem;
  }
  @media screen and (max-width: 768px) {
    width: auto;
  }
`
const Right = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 12px;
  svg {
    cursor: pointer;
    margin-right: 14px;
    color: ${props => props.theme.textColor};
  }
  @media screen and (max-width: 768px) {
    width: auto;
    padding-right: 0;
    svg{
      margin: 0;
    }
  }
`
const UserImage = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 10px;
  img {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin-left: 8px;
  }
`
const UserEmail = styled.p`
  font-size: 1rem;
  margin-right: 4px;
  @media screen and (max-width: 768px) {
    font-size: .8rem;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  svg{
    transition: all ease-in-out .255s;
  }
  .viewOn{
    transform: rotate(180deg);
  }
`
const ViewWrapper = styled.div`
  position: absolute;
  width: auto;
  gap: 8px;
  top: 20px;
  padding: 12px 0;
  z-index: 9999999;
  border: 2px solid ${props => props.theme.textColor};
  background-color: ${props => props.theme.bgColor};
  border-radius: 12px;
  min-width: 300px;
  .WrapperBox {
    width: 100%;
    padding: 8px 14px 8px 54px;
    min-height: 50px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: all ease-in-out .08s;
    svg{
      position: absolute;
      right: 0;
      bottom: 0;
      transform: translateY(50%);
      margin-right: 4px;
      fill: ${props => props.theme.textColor};
    }
    span{
      color: ${props => props.theme.textColor2};
      font-size: 14px;
    }
    .themeBtn{
    }
  }
  .WrapperBox:hover{
    background-color: ${props => props.theme.boxColor};
  }
`