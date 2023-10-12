import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import HomeMainStyles from './styles/Home.styled';
import HeaderMain from '../../components/HeaderMain';
import photoHeader from '../../assets/Image_source_1.png';
import { logements } from '../../data/data';
import LogementCard from '../../components/LogementCard';

export default function Home() {
  function handleClick(e){
    console.log(e.currentTarget.id)
  }

  return (
    <> 
      <HomeMainStyles>
        <HeaderMain photo={photoHeader} h='223px' text='Chez vous, partout et ailleurs' />
        <div id='containerLogements'>
          {
            logements.map((logement)=>{
              return <LogementCard key={logement.id} id={logement.id} photo={logement.cover} title={logement.title} handleClick={handleClick}/>
            })
          }
        </div>
      </HomeMainStyles>
    </>
  )
}
