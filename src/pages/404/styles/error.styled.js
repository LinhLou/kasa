import styled from "styled-components";

const MainError = styled.main`
  padding-bottom: 139px;
  padding-top: 90px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:139px;
  color: #FF6060;
  text-align: center;
  #error {
    font-size: 288px;
  }
  #message {
    font-size: 36px;
  }

  span {
    font-size: 18px;
    color: #FF6060;
    text-decoration: underline;
  }
`;

export default MainError;