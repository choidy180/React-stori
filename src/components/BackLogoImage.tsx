import React from 'react';
import styled from 'styled-components';

export default function BackLogoImage(){
  return(
    <BackImage 
      src='/images/logo/stori_back_logo.png'
    />
  )
}

const BackImage = styled.img`
  position: fixed;
  z-index: 5;
  right: 4vw;
  max-height: 600px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.4;
`