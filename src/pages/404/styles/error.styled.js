import styled from "styled-components";
import { device } from "../../../components/styles/Devices.styled";

const MainError = styled.main`
  padding-bottom: 139px;
  padding-top: 90px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:113px;
  color: #FF6060;
  text-align: center;
  @media only screen and (${device.md}){
    gap:139px;
  }
  #error {
    font-size: 96px;
    @media only screen and (${device.md}){
      font-size: 288px;
    }
  }
  #message {
    font-size: 18px;
    @media only screen and (${device.md}){
      font-size: 36px;
    }
  }

  span {
    font-size: 14px;
    color: #FF6060;
    text-decoration: underline;
    @media only screen and (${device.md}){
      font-size: 18px;
    }
  }
`;

export default MainError;