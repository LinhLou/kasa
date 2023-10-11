import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    text-decoration: none;
    margin:0;
  }
  body{
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;