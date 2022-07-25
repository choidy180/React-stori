import React from 'react';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
import NavBar from "../components/Nav";

interface title {
  title: string;
}

export default function HelmetPd(title: title){
  return(
    <HelmetProvider>
      <Helmet title={title.title}/>
    </HelmetProvider>
  )
}