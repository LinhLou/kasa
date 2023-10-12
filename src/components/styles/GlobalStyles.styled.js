import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    text-decoration: none;
    margin:0;
  }
  body{
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    max-width: 1440px;
    margin:auto;
  }
`;

export default GlobalStyles;