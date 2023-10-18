import styled from "styled-components";
import { device } from "./Devices.styled";

const ButtonStyles = styled.button`
 background-color: transparent;
 border: none;
 img {
  width: 16px;
  height: 8px;
  @media only screen and (${device.md}){
    width: 24px;
    height: 14px;
  }
  object-fit: contain;
 }
`;

export default ButtonStyles;