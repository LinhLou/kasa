import React from 'react';
import LogementCardStyles from './styles/LogementCard.styled';

export default function LogementCard({id, photo, title}) {
  return (
    <>
     <LogementCardStyles id={id}>
      <img src={photo} alt={title}/>
      <h2>{title}</h2>
     </LogementCardStyles>
    </>
  )
}
