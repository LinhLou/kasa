import styled from "styled-components";
import { device } from "./Devices.styled";
const FooterContainer = styled.footer`
  background-color: #000000;
  height: 209px;
  width: 100%;
  color:#FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap : 28.5px;
  font-size: 12px;
  @media only screen and (${device.md}){
    font-size: 24px;
  }
`;

export default FooterContainer;