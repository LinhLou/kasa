import React from 'react';
import { useParams, Link } from 'react-router-dom';
import HeaderMain from '../../components/HeaderMain';
import LogementMainStyles from './styles/Logement.styled';
import { logements } from '../../data/data';
import Dropdown from '../../components/Dropdown';
import Star from '../../components/Star';

export default function Logement() {
  const { idLogement } = useParams();
  const logement = (logements.filter((logement)=>logement.id===idLogement));
  const logementInfo = logement[0];
  const colorStars = [...Array(Number(5-logementInfo.rating)).fill("#E3E3E3"),...Array(Number(logementInfo.rating)).fill("#FF6060")];

  // const nextId = logements.filter((logement,index)=>{
  //   return (logement.id===idLogement && index===(logements.length-1))? logements[0] : logement.id===idLogement? logements[index+1]:null
  // })[0].id;
  // const previousId = logements.filter((logement,index)=>{
  //   return (logement.id===idLogement && index==0)? logements[logements.length-1] : logement.id===idLogement? logements[index-1]:null
  // })[0].id;
  const indexLogement = logements.indexOf(logementInfo);
  const nextId = ()=> {
    if(indexLogement==(logements.length-1)){
      return logements[0].id
    }else{
      return logements[indexLogement+1].id
    }
  }

  const previousId = ()=> {
    if(indexLogement==0){
      return logements[logements.length-1].id
    }else{
      return logements[0].id
    }
  }

  return (
    <> 
    <LogementMainStyles>
      <div id="headerMain">
        <Link to={`/Logement/${previousId()}`}>
          <svg  id="btnDown" xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
          </svg>
        </Link>
        <HeaderMain photo={logementInfo.cover} h='415px'/>
        <Link  to={`/Logement/${nextId()}`}>
          <svg id="btnUp" xmlns="http://www.w3.org/2000/svg" width="48" height="80" viewBox="0 0 48 80" fill="none">
            <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
          </svg>
        </Link>
      </div>
      <div id='containerInfos' >
        <div id='title'>
          <div>
            <h1>{logementInfo.title}</h1>
            <span>{logementInfo.location}</span>
          </div>
          <div id="host">
            <p>{logementInfo.host.name}</p>
            <img src={logementInfo.host.picture} alt="picture" />
          </div>
        </div>
        <div id='infoSup'>
          <div id='tags'>
            {logementInfo.tags.map((tag,index)=>{
              return(
                <div key={index}>
                  {tag}
                </div>
              )
            })}
          </div>
          <div id='stars'>
            <Star color={colorStars}/>
          </div>
        </div>
        <div id='dropdowns'>
          <Dropdown w='100%' title='Description' infos={[logementInfo.description]}/>
          <Dropdown w='100%' title='Équipements' infos={logementInfo.equipments}/>
        </div>
      </div>
    </LogementMainStyles>
    </>
  )
}
