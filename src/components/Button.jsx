import React from 'react';
import ButtonStyles from './styles/Button.styled';

export default function Button({icon, handleClick}) {
  return (
    <ButtonStyles onClick={handleClick}>
      <img src={icon} alt="vector" />
      
    </ButtonStyles>
  )
}
