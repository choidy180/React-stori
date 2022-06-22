import React from 'react';
import styled from "styled-components"
import { Helmet } from "react-helmet";


export default function Home(){
  return (
    <Container>
      <Helmet>
        <title>홈페이지</title>
      </Helmet>
    </Container>
  )
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 1200px;
  margin: 0 auto;
`