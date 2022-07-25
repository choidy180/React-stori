import React from 'react';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import HelmetPd from '../components/Helmet';
import NavBar from "../components/Nav";

interface title {
  title: string;
}

export default function Series(title: title){
  return(
    <>
      <NavBar title={title.title}/>
      <Container>
        <HelmetPd title={title.title}/>
      </Container>
    </>
  )
}

const Container = styled.div`
  padding: 0px 20px 30px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: 0px;
    padding-bottom: 20px;
  }
`