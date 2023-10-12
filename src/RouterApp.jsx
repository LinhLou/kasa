import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Logement from './pages/Logement/Logement';
import Propos from './pages/Propos/Propos';
import Error from './pages/404/Error';
import GlobalStyles from './components/styles/GlobalStyles.styled';

export default function RouterApp() {
  return (
    <div>
      <GlobalStyles />
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Propos' element={<Propos />} />
        <Route path='/Logement/:id' element={<Logement />} />
        <Route path='/*' element={<Error error='404'/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
