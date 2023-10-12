import styled from "styled-components";

const LogementCardStyles = styled.div`
  border-radius: 10px;
  position:relative;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  h2 {
    color:white;
    font-size: 18px;
    position:absolute;
    bottom:20px;
    left:20px;
  }
`;
export default LogementCardStyles;