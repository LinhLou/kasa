import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import logo from '../assets/logo.png';
import { HeaderContainer } from './styles/Header.styled';

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="logo"/>
        <nav>
          <Link to='/'><span>Accueil</span></Link>
          <Link to='/Propos'><span>A Propos</span></Link>
        </nav>
      </HeaderContainer>
      <Outlet/>
    </>
  )
}
