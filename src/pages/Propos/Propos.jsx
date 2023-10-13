import React from 'react';
import HeaderMain from '../../components/HeaderMain';
import ProposMainStyles from './styles/Propos.styled';
import Dropdown from '../../components/Dropdown';
import photo from '../../assets/Image_source_2.png';

export default function Propos() {
  const weightDropdown = '1023px';
  return (
    <ProposMainStyles>
      <HeaderMain photo={photo} h='223px'/>
      <div id="propos">
        <Dropdown w={weightDropdown} title='Fiabilité' infos={['test 111']}/>
        <Dropdown w={weightDropdown} title='Respect' infos={['test 112']}/>
        <Dropdown w={weightDropdown} title='Service' infos={['test 113']}/>
        <Dropdown w={weightDropdown} title='Sécurité' infos={['test 114']}/>
      </div>
    </ProposMainStyles>
  )
}
