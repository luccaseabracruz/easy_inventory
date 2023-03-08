import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #312782;
  width: 100vw;
  height: 80px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: 150px;
  }

  .link__container {
    display: flex;
    gap: 35px;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
