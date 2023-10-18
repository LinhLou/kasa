import styled from "styled-components";
import { device } from "./Devices.styled";

const StarStyles = styled.svg`
  width: 98px;
  height: 18px;
  @media only screen and (${device.md}){
    width: 196px;
    height: 36px;
  }

`;
export default StarStyles;