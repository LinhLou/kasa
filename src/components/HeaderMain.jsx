import React from 'react';
import HeaderMainStyles from './styles/HeaderMain.styled';

export default function HeaderMain({photo, h, text}) {
  return (
    <>
     <HeaderMainStyles h={h}>
      <img src={photo} alt='photo'/>
      <p>{text}</p>
     </HeaderMainStyles>
    </>
  )
}
