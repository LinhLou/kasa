import styled from "styled-components";

const HeaderMainStyles = styled.header`
  height: ${({h}) => h};
  position: relative;
  padding:0;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 25px;

  }
  h1 {
    color:white;
    font-size: 48px;
    text-align: center;
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
`;

export default HeaderMainStyles;