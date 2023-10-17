import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import HomeMainStyles from './styles/Home.styled';
import HeaderMain from '../../components/HeaderMain';
import photoHeader from '../../assets/Image_source_1.png';
import { logements } from '../../data/data';
import LogementCard from '../../components/LogementCard';
import { Container, Column } from '../../components/styles/Devices.styled';

export default function Home() {
  return (
    <> 
      <HomeMainStyles>
        <HeaderMain photo={photoHeader} h={{md:'223px',sm:'111px'}} text={['Chez vous,','partout et ailleurs']} />
          <Container  id='containerLogements' $xs={{nbrCol:1, gapY:'20px'}} $sm={{nbrCol:1, gapY:'30px'}} $md={{nbrCol:2, gapX:'60px',gapY:'40px'}} $lg={{nbrCol:3, gapX:'60px',gapY:'50px'}}>
            {
              logements.map((logement)=>{
                return (
                  <Column key={logement.id} $xs={255} $sm={300} $md={300} $lg={340}>
                    <Link  to={`/Logement/${logement.id}`}>
                      <LogementCard  id={logement.id} photo={logement.cover} title={logement.title}/>
                    </Link>
                  </Column>
                )
              })
            }
          </Container>

      </HomeMainStyles>
    </>
  )
}
