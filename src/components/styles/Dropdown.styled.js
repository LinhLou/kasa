import styled from "styled-components";
import { device } from "./Devices.styled";
const DropdownStyles = styled.div`
  background-color: ${({ $bg }) => $bg};
  width: ${({ $w }) => $w};
  border-radius: 5px;
  font-size: 13px;
  @media only screen and (${device.md}){
    border-radius: 10px;
    font-size: 24px;
  }
  #dropdownTitle {
    color:white;
    background-color: #FF6060;
    padding:10px;
    border-radius: 5px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (${device.md}){
      padding:10px 20px 10px 10px;
      border-radius: 10px;
      font-size: 24px;
      height: 52px;
  }
  }
  #dropdownInfos {
    background-color:var(--Gray, #F6F6F6);
    border-radius: 0 0 10px 10px;
    color:#FF6060;
    padding:10px;
    font-size: 13px;
    line-height: 20px;
    @media only screen and (${device.md}){
      padding:20px;
      font-size: 18px;
      line-height: 30px;
  }
  }
`;
export default DropdownStyles;