import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import MainError from './styles/error.styled';

export default function Error({error}) {
  return (
    <>
      <MainError>
        <p id='error'>{error}</p>
        <p id='message'>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to='/'><span>Retourner sur la page d'acceuil</span></Link>
      </MainError>
      <Outlet />
    </>
  )
}
