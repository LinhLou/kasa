import styled from "styled-components";

const ButtonStyles = styled.button`
 background-color: transparent;
 border:none;
 padding:0;
 display: flex;
 justify-content: center;
 align-items: center;
 transform:rotate(${({ $up }) => $up});
 transform-origin: center;
`;

export default ButtonStyles;