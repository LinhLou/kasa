import styled from "styled-components";
import { device } from "./Devices.styled";

const Arrow = styled.svg`
   width:24px;
   height:24px;
 @media only screen and (${device.md}){
   width:48px;
   height:80px;
 }
`
export default Arrow;