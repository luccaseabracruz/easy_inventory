import styled from "styled-components";

export const StyleFormRegister = styled.form`
  width: 400px;
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

  fieldset {
    width: 100%;
    padding: 0;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  input {
    width: 70%;
    height: 20px;
  }

  button {
    cursor: pointer;
    margin-top: 20px;
    width: 73%;
    height: 30px;
    background: #26f13a;
    border: 2px solid #27ae60;
    border-radius: 5px;
  }
`;
