import * as yup from "yup";

export const formRLoginSchema = yup.object().shape({
  email: yup.string().required("obrigatório").email("o email é obrigatório"),
  password: yup
    .string()
    .required("obrigatório")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]).{6,}$/,
      "Senha precisa ter no mínimo 6 caracteres, contendo: 1 letra maiúscula, 1 letra minúscula, 1 símbolo, 1 número."
    ),
});
