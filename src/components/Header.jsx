import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <>
      <div>
        <img src={logo} alt="logo"/>
        <nav>
          <Link to='/'>Acceuil</Link>
          <Link to='/Propos'>A Propos</Link>
        </nav>
      </div>
      <Outlet/>
    </>
  )
}
