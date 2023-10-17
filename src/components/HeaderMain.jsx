import React from 'react';
import HeaderMainStyles from './styles/HeaderMain.styled';

export default function HeaderMain({photo, h, text}) {
  return (
    <>
     <HeaderMainStyles $h={h}>
      <img src={photo} alt='photo'/>
      {
        text && <h1><span>{text[0]}</span><span>{text[1]}</span></h1>
      }
     </HeaderMainStyles>
    </>
  )
}
