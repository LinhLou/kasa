import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 45px 100px 50px;
  display:flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 210px;
    height: 68px;
    object-fit: cover;
  }

  nav {
    height: 34px;
    width: 309px; 
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap:57px;
    span {
      color: #FF6060;
      font-size: 24px;
      display:inline-block;
      &:hover{
        text-decoration: underline;
      }
    }
  }
`;
