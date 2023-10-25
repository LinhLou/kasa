import styled from "styled-components";
import { device } from "./Devices.styled";

const ArrowUpDown = styled.svg`
  width: 20px;
  height: 19px;
  @media only screen and (${device.md}){
    width: 32px;
    height: 33px;
  }
`;

export default ArrowUpDown;