import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyleFormRegister } from "../../Pages/RegisterPage/style";
import { IRegisterFormValues } from "../../provides/TypesUser";
import { UserContext } from "../../provides/UserContext";
import { InputForm } from "../InputForm/InputForm";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>();

  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  };

  return (
    <StyleFormRegister onSubmit={handleSubmit(submit)}>
      <InputForm
        label="name"
        placeholder="Digite seu Nome"
        type="text"
        register={register("name")}
        error={errors.name}
      />
      <InputForm
        label="email"
        placeholder="Digite seu Email"
        type="email"
        register={register("email")}
        error={errors.email}
      />
      <InputForm
        label="senha"
        placeholder="Digite sua Senha"
        type="password"
        register={register("password")}
        error={errors.password}
      />
      <InputForm
        label="Confirme a Senha"
        placeholder="Confirme Sua Senha"
        type="password"
        register={register("password")}
        error={errors.password}
      />
      <button>Cadastrar</button>
    </StyleFormRegister>
  );
};
