import React from 'react';
import { Link } from 'react-router-dom';
import MainError from './styles/error.styled';

export default function Error() {
  return (
    <>
      <MainError>
        <p id='error'>404</p>
        <p id='message'>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to='/'><span>Retourner sur la page d'acceuil</span></Link>
      </MainError>

    </>
  )
}
