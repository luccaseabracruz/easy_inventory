import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 60px;

  img {
    height: 450px;
  }
`;

export const StykedForm = styled.form`
  padding-left: 20px;
  width: 400px;
  height: 450px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  color: white;
  background: #312782;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;

  fieldset {
    padding: 0;
    width: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  input {
    width: 70%;
    height: 30px;
  }

  button {
    margin-top: 20px;
    cursor: pointer;
    width: 73%;
    height: 30px;
    left: 280px;
    top: 2117px;

    background: #26f13a;
    /* color-primary */

    border: 2px solid #27ae60;
    border-radius: 5px;
  }
`;
