import styled from "styled-components";
import { device } from "./Devices.styled";

export const HeaderContainer = styled.header`
  padding: 20px 20px 27px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (${device.md}){
    padding: 45px 100px 50px;
  }

  img {
    width: 145px;
    height: 46.8px;
    @media only screen and (${device.md}){
      width: 210px;
      height: 68px;
    }
    object-fit: cover;
  }

  nav {
    height: 34px;
    width: 309px; 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap:26px;
    @media only screen and (${device.md}){
      gap:57px;
    }
    a {
      color: #FF6060;
      font-size: 12px;
      display:inline-block;
      &:hover{
        text-decoration: underline;
      }
      &.active{
        text-decoration: underline;
      }
      &.inactive{
        text-decoration: none;
      }

      @media only screen and (${device.md}){
        font-size: 24px;
      }
    }
  }
`;
