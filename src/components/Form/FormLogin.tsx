import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StykedForm } from "../../Pages/LoginPage/style";
import { ILoginValues } from "../../provides/TypesUser";
import { UserContext } from "../../provides/UserContext";
import { InputForm } from "../InputForm/InputForm";
import { formRLoginSchema } from "./formLoginSchema";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginValues>({
    resolver: yupResolver(formRLoginSchema),
  });

  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginValues> = (formData) => {
    userLogin(formData);
  };

  return (
    <StykedForm onSubmit={handleSubmit(submit)}>
      <h1>Login</h1>
      <InputForm
        label="E-mail"
        placeholder="Digite seu Email"
        type="email"
        register={register("email")}
        error={errors.email}
      />
      <InputForm
        label="Senha"
        placeholder="Digite sua Senha"
        type="password"
        register={register("password")}
        error={errors.password}
      />
      <button>Entrar</button>
    </StykedForm>
  );
};
