import React from 'react';
import ButtonStyles from './styles/Button.styled';
import ArrowUp from './ArrowUpDown';

export default function Button({icon, handleClick}) {
  return (
    <ButtonStyles onClick={handleClick} $up={icon}>
      <ArrowUp />
    </ButtonStyles>
  )
}
