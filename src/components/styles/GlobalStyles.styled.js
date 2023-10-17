import { createGlobalStyle } from "styled-components";
import { device } from './Devices.styled';
const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    text-decoration: none;
    margin:0;
  }
  body{
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    min-height: 100vh;
    max-width: 1440px;
    margin:auto;
  }
  main {
    padding: 0 20px;
    @media only screen and (${device.md}){
      padding: 0 100px;
    }
  }
`;

export default GlobalStyles;