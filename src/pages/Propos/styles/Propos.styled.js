import styled from "styled-components";
import { device } from "../../../components/styles/Devices.styled";
const ProposMainStyles = styled.main`

  #propos {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:20px;
    margin-top:20px;
    margin-bottom: 20px;
    @media only screen and (${device.md}){
      gap:38px;
      margin-top:38px;
      margin-bottom: 38px;
    }
    & > *{
      width: 100%;
      @media only screen and (${device.md}){
        width: 85%;
      }
    } 
  }

`

export default ProposMainStyles