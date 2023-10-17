import styled from "styled-components";
import { device } from "../../../components/styles/Devices.styled";

const HomeMainStyles = styled.main`
  background-color: white;
  #containerLogements {
    padding: 22px 0 27px;
    @media only screen and (${device.md}){
        background-color: #F6F6F6; 
        border-radius: 25px; 
        margin-top:43px; 
        margin-bottom: 50px;
        padding:56px 50px 43px;
    }
  }

`;
export default HomeMainStyles;