import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-top: 60px;

  img {
    height: 450px;
  }
`;

export const StykedForm = styled.form`
  width: 500px;
  height: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  background: #312782;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;

  fieldset{
    border: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;
