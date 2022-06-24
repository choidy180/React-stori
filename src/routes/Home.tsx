import React from 'react';
import styled from "styled-components"
import { Helmet, HelmetProvider } from "react-helmet-async";
import BackLogoImage from '../components/BackLogoImage';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../recoil/theme';


export default function Home(){
  const isDark = useRecoilValue(isDarkAtom);
  console.log(isDark);
  return (
    <Container>
      <HelmetProvider>
        <Helmet title="홈페이지"/>
      </HelmetProvider>
      <BackLogoImage/>
    </Container>
  )
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 1200px;
  margin: 0 auto;
`