import React from 'react';
import { useParams } from 'react-router-dom';
import HeaderMain from '../../components/HeaderMain';
import LogementMainStyles from './styles/Logement.styled';
import { logements } from '../../data/data';
import Dropdown from '../../components/Dropdown';

export default function Logement() {
  const { idLogement } = useParams();
  const logement = (logements.filter((logement)=>logement.id===idLogement));
  const logementInfo = logement[0];
  console.log(logementInfo)
  return (
    <> 
    <LogementMainStyles>
      <HeaderMain photo={logementInfo.cover} h='415px'/>
      <div id='containerInfos' >
      <Dropdown w='300px' title='Description' infos={['Helllo test!']}/>
      </div>
    </LogementMainStyles>
    </>
  )
}
