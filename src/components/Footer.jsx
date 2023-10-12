import React from 'react';
import logofooter from '../assets/logoFooter.png';
import FooterContainer from './styles/Footer.styled';

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <img src={logofooter} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>  
      </FooterContainer>
    </>
  )
}
