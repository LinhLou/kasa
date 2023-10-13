import styled from "styled-components";

const DropdownStyles = styled.div`
  background-color: ${({bg})=>bg};
  width: ${({w})=>w};
  border-radius: 10px;
  #dropdownTitle {
    color:white;
    font-size: 24px;
    background-color: #FF6060;
    padding:10px 20px 10px 10px;
    border-radius: 10px;
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #dropdownInfos {
    background-color:var(--Gray, #F6F6F6);
    border-radius: 0 0 10px 10px;
    color:#FF6060;
    padding:20px;
    font-size: 18px;
    line-height: 30px;
  }
`;
export default DropdownStyles;