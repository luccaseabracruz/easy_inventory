import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 60px;

  img {
    height: 450px;
  }
  @media (max-width: 690px) {
    padding-top: 30px;

    .img__container {
      display: none;
    }
  }
`;

export const StyledForm = styled.form`
  padding-left: 20px;
  width: 375px;
  height: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  color: white;
  background: #312782;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;

  h1 {
    align-self: flex-start;
    margin-left: 70px;
  }

  fieldset {
    padding: 0;
    width: 90%;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
  label {
    align-self: flex-start;
    padding-left: 50px;
  }
  input {
    width: 70%;
    height: 30px;
  }

  button {
    margin-top: 20px;
    cursor: pointer;
    width: 69%;
    height: 30px;
    left: 280px;
    top: 2117px;

    background: #26f13a;

    border: 2px solid #27ae60;
    border-radius: 5px;
  }

  @media (max-width: 690px) {
    height: 400px;
  }
`;
