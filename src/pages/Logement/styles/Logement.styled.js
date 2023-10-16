import styled from "styled-components";

const LogementMainStyles = styled.main`
  #headerMain {
    position: relative;
  }
  #numerotation {
    position: absolute;
    bottom:25px;
    left:50%;
    color:white;
    font-size: 18px;
    transform: translateX(-50%);
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
  #containerInfos {
    margin-top:30px;
    margin-bottom:50px;
    color:#FF6060;
  }
  #title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 36px;
    }
    span {
      font-size: 18px;
    }
    #host {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap:10px;
      p {
        font-size: 18px;
        text-align: right;
        width: min-content;
      }
      img {
        width: 64px;
        height: 64px;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
  #infoSup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    #tags{
      margin-top:23px;
      margin-bottom:31px;
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
        border-radius:10px ;
        color:white;
        font-size: 14px;
        height: 25px;
        min-width: 115px;
        padding:0 10px;

      }

    }
  }
  #dropdowns {
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:76px;
  }
  
`

export default LogementMainStyles;