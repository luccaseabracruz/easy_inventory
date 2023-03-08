import React from "react";
import { Inputs } from "../../components/Inputs/Inputs";
import { FormRegister } from "./style";

export const RegisterPage = () => {
  return (
    <FormRegister>
      <p>Register</p>
      <Inputs />
      <Inputs />
      <Inputs />
      <Inputs />
      <button>Cadastrar</button>
    </FormRegister>
  );
};
