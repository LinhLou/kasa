import React, { useState } from 'react';
import DropdownStyles from './styles/Dropdown.styled';
import Button from './Button';
import Vector from '../assets/Vector.png';
import VectorDown from '../assets/VectorDown.png';

export default function Dropdown({w, title, infos}) {
  const [infosElement, openElement] = useState('');
  const [iconVector, setIcon] = useState(Vector);
  const [bg, setBg] = useState('transparent');

  function handleClick(){
    if(!infosElement){
      openElement(()=>{
        setIcon(VectorDown);
        setBg('var(--Gray, #F6F6F6)');
        return(
          <div id='dropdownInfos'>
            {
            infos.map((info,index)=>{
              return(
                <div key={index}>
                  {info}
                </div>
              )
            })
            }
          </div>
        )
      })
    }else{
      openElement(()=>{
        setIcon(Vector);
        setBg('transparent');
        return null
      })
    }
  }


  return (
    <DropdownStyles $bg={bg} $w={w}>
      <div id='dropdownTitle'>
        <h3>{title}</h3>
        <Button icon={iconVector} handleClick={handleClick}/>
      </div>
      {infosElement}
    </DropdownStyles>
  )
}
