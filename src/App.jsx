import React from 'react';
import {RouterProvider} from 'react-router-dom';
import GlobalStyles from './components/styles/GlobalStyles.styled';
import { router } from './router';


export default function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router}/>
    </>

  );
}
