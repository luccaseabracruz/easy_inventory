import * as yup from "yup";

export const formRLoginSchema = yup.object().shape({
  email: yup.string().required("obrigatório").email("o email é obrigatório"),
  password: yup
    .string()
    .required("obrigatório")
    .matches(/(\d)/, "Deve ter pelo menos 1 numero")
    .matches(/[a-z]/, "Deve ter pelo menos uma letra minuscula")
    .matches(/[A-Z]/, "Deve ter pelo menos uma letra maiuscula")
    .matches(/(\W|_)/, "Deve ter pelo menos 1 simbolo"),
});
