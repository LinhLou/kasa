import React from 'react';
import HeaderMain from '../../components/HeaderMain';
import ProposMainStyles from './styles/Propos.styled';
import Dropdown from '../../components/Dropdown';
import photo from '../../assets/Image_source_2.png';
const proposInfos = {
  Fiabilité:['Les annonces portées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrment vérifiées par nos équipes.'],
  Respect:['La bienveuillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platforme.'],
  Service: ['La bienveuillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre platforme.'],
  Securité:[`La securité est la priorité de Kasa. Aussi bien pour notre hôtes que pour les voyageurs, chaque logement corresponde aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des atelier sur la sécurité domestique pour nos hôtes.`]
}

export default function Propos() {
  const weightDropdown = '1023px';
  return (
    <ProposMainStyles>
      <HeaderMain photo={photo} h='223px'/>
      <div id="propos">
        <Dropdown w={weightDropdown} title='Fiabilité' infos={proposInfos.Fiabilité}/>
        <Dropdown w={weightDropdown} title='Respect' infos={proposInfos.Respect}/>
        <Dropdown w={weightDropdown} title='Service' infos={proposInfos.Service}/>
        <Dropdown w={weightDropdown} title='Sécurité' infos={proposInfos.Securité}/>
      </div>
    </ProposMainStyles>
  )
}
