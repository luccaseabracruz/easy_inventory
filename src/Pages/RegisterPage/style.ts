import styled from "styled-components";

export const StyleFormRegister = styled.form`
  max-width: 380px;
  height: 70vh;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  padding-left: 40px;
  color: white;
  background: #312782;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;

  h1 {
    margin-left: 50px;
  }
  fieldset {
    width: 90%;
    padding: 0;
    border: none;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  }
  label {
    align-self: flex-start;
    padding-left: 50px;
  }
  input {
    width: 70%;
    height: 20px;
  }

  button {
    margin-left: 50px;
    cursor: pointer;
    margin-top: 20px;
    width: 66%;
    height: 30px;
    background: #26f13a;
    border: 2px solid #27ae60;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    height: 80vh;
    justify-content: flex-start;
  }
`;
