import * as yup from "yup";

export const formRegisterSchema = yup.object().shape({
    name: yup.string().required("Obrigatório"),
    email: yup.string().required("Obrigatório").email("o email é Obrigatório"),
    password: yup
      .string()
      .required("Obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]).{8,}$/,
        "Senha precisa ter no mínimo 8 caracteres, contendo: 1 letra maiúscula, 1 letra minúscula, 1 símbolo, 1 número."
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), "As senhas não correspondem"]),
  });