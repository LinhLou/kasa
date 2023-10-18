import styled from "styled-components";
import { device } from "./Devices.styled";



const Logo = styled.svg`
  ${({ $footer }) => $footer ? `  
    width: 122px;
    height: 39.5px;`: `
    width: 145px;
    height: 47px;
    @media only screen and (${device.md}){
      width: 211px;
      height: 68px;
    }`
  }
`;
export default Logo;