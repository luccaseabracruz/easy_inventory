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

  @media (max-width: 500px) {
      display: flex;
      width: 100%;
      flex-direction: column;
      height: 110px;
  }
`;
