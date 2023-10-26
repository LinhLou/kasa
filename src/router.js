import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home, { logementsLoader } from './pages/Home/Home';
import Logement, { logementLoader } from './pages/Logement/Logement';
import Propos from './pages/Propos/Propos';
import Error from './pages/404/Error';



export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route 
          index 
          loader={logementsLoader}
          element={<Home/>} 
          errorElement={<Error/>}
        />
        <Route path='Propos' element={<Propos/>} />
        <Route 
          path=':idLogement' 
          loader={logementLoader}
          element={<Logement />} 
          errorElement={<Error/>}
        />
        <Route path='*' element={<Error/>} />
    </Route>
  )
)