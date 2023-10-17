import styled from "styled-components";
import { device } from "./Devices.styled";

const HeaderMainStyles = styled.header`
  height: ${({ $h }) => $h.sm};
  @media only screen and (${device.md}){
    height: ${({ $h }) => $h.md};
  }
  position: relative;
  padding:0;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    @media only screen and (${device.md}){
      border-radius: 25px;
    }

  }

  h1 {
    color:White;
    font-size: 24px;
    position: absolute;
    padding-left:16px;
    top:50%;
    transform: translateY(-50%);
    span {
      display: block;
    }
    @media only screen and (${device.md}){
      span {
        display: inline;
      }
      padding:0;
      font-size: 48px;
      width: max-content;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }
  }

`;

export default HeaderMainStyles;