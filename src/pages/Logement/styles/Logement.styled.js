import styled from "styled-components";
import { device } from '../../../components/styles/Devices.styled';

const LogementMainStyles = styled.main`
/* Header Main */
  #headerMain {
    position: relative;
  }
  #numerotation {
    position: absolute;
    bottom:25px;
    left:50%;
    color:white;
    font-size: 14px;
    visibility: hidden;
    transform: translateX(-50%);
    @media only screen and (${device.md}){
      font-size: 18px;
      visibility: visible;
    }
  }
  #arrowDown, #arrowUp {
    position: absolute;
    background-color: transparent;
    border: none;
    z-index: 3;
  }
  #arrowDown {
    left: 23.5px;
    top:50%;
    transform: translateY(-50%);
  }
  #arrowUp {
    right: 23.5px;
    top:50%;
    transform: translateY(-50%);
  }
  
  /* Container Main */
  #containerMain {
    margin-top:15px;
    margin-bottom:27px;
    color:#FF6060;
    width: 100%;
    display:flex;
    flex-direction: column;
    gap: 13px;
    @media only screen and (${device.md}){
      gap: 24px;
      margin-top:30px;
      margin-bottom:50px;
    }
  }
  #intro {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:16px;
    @media only screen and (${device.md}){
      gap:30px;
      flex-direction: row;
    }
    #title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    gap:10px;
    @media only screen and (${device.md}){
      gap:20px;
      }
    h1 {
      font-size: 18px;
      line-height: 142.6%;
      @media only screen and (${device.md}){
        font-size: 36px;
      }
    }
    span {
      font-size: 14px;
      line-height: 142.6%;
      @media only screen and (${device.md}){
        font-size: 18px;
      }
    }
    #tags{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap:10px;
      div{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #FF6060;
        color:white;
        padding:0 10px;
        border-radius:5px ;
        font-size: 10px;
        height: 18px;
        min-width: 84px;
        @media only screen and (${device.md}){
          border-radius:10px ;
          font-size: 14px;
          height: 25px;
          min-width: 115px;
        }
      }

    }
    }
    #infoSup {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row-reverse;
      @media only screen and (${device.md}){
        flex-direction: column;
      }
      #host {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap:10px;
        p {
          font-size: 12px;
          text-align: right;
          width: min-content;
          @media only screen and (${device.md}){
            flex-direction: column;
            font-size: 18px;
          }
        }
        img {
          width: 32px;
          height: 32px;
          object-fit: cover;
          border-radius: 50%;
          @media only screen and (${device.md}){
            width: 64px;
            height: 64px;
          }
        }
      }
    }

  }

  #dropdowns{
    width: 100%;
    display:grid;
    grid-template-columns: 1fr;
    row-gap:20px;
    @media only screen and (${device.md}){
      grid-template-columns: 1fr 1fr;
      gap:76px;
    }
  }


  
`;

export default LogementMainStyles;