import React from 'react';
import { useState } from 'react';
import { ChevronDownOutline, MoonOutline, SunnyOutline } from 'react-ionicons';
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
  };
  return (
    <Container>
      <Left>
        <img src="Logo.svg" alt="" />
      </Left>
      <Center>
        <p>{title}</p>
      </Center>
      <Right>
        {!isDark ? 
        <MoonOutline
          width={"30px"}
          height={"30px"}
          onClick={toggleDarkAtom}
        /> :
        <SunnyOutline
          width={"30px"}
          height={"30px"}
          onClick={toggleDarkAtom}
        />
        }
        <UserImage>
          <img src="images/F6CB11C6-6E14-4B87-BE43-AF2493348A20_1_105_c.png" alt="" />
        </UserImage>
        <UserEmail>
          minseok@storicha.in
          <ChevronDownOutline
            color={theme.textColor}
            width={"20px"}
            height={"20px"}
          />
        </UserEmail>
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
`