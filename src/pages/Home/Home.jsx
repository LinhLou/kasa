import React from 'react';
import HomeMainStyles from './styles/Home.styled';
import HeaderMain from '../../components/HeaderMain';
import photoHeader from '../../assets/Image_source_1.png';

export default function Home() {
  return (
    <> 
      <HomeMainStyles>
        <HeaderMain photo={photoHeader} h='223px' text='Chez vous, partout et ailleurs' />
      </HomeMainStyles>
    </>
  )
}
