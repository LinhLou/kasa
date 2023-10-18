import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import HeaderMain from '../../components/HeaderMain';
import LogementMainStyles from './styles/Logement.styled';
import { logements } from '../../data/data';
import Dropdown from '../../components/Dropdown';
import Star from '../../components/Star';
import Arrows from '../../components/Arrows';


export default function Logement() {
  const { idLogement } = useParams();
  const logement = (logements.filter((logement)=>logement.id===idLogement));
  const logementInfo = logement[0];
  const colorStars = [...Array(Number(5-logementInfo.rating)).fill("#E3E3E3"),...Array(Number(logementInfo.rating)).fill("#FF6060")];
  let [orderPicture, setOrderPicture] = useState(1);
  let [photoCover, setPhotoCover] = useState(logementInfo.cover);
  const numPicture = logementInfo.pictures.length;
  function handleClickArrowDown() {
    if(orderPicture==1){
      setPhotoCover(logementInfo.pictures[numPicture-1]);
      setOrderPicture(numPicture);
    }else{
      setPhotoCover(logementInfo.pictures[orderPicture-2]);
      setOrderPicture(orderPicture-1);
    }
  }
  function handleClickArrowUp() {
    if(orderPicture==numPicture){
      setPhotoCover(logementInfo.pictures[0]);
      setOrderPicture(1);
    }else{
      setPhotoCover(logementInfo.pictures[orderPicture]);
      setOrderPicture(orderPicture+1);
    }
  }
  return (
    <> 
    <LogementMainStyles>
      <div id="headerMain">
        <HeaderMain photo={photoCover} h={{md:'415px',sm:'255px'}}/>
        <Arrows numPicture={numPicture} ordPicture={orderPicture} handleClickArrowDown={handleClickArrowDown} handleClickArrowUp={handleClickArrowUp}/>
      </div>
      <div id='containerMain' >
        <div id='intro'>
          <div id='title'>
            <div>
              <h1>{logementInfo.title}</h1>
              <span>{logementInfo.location}</span>
            </div>
            <div id='tags'>
              {logementInfo.tags.map((tag,index)=>{
                return(
                  <div key={index}>
                    {tag}
                  </div>
                )
              })}
            </div>
          </div>
          <div id='infoSup'>
            <div id="host">
                <p>{logementInfo.host.name}</p>
                <img src={logementInfo.host.picture} alt="picture" />
            </div>
            <div id='stars'>
              <Star color={colorStars}/>
            </div>
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
