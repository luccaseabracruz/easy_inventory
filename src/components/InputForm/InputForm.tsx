import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
  type: "text" | "email" | "password";
  placeholder: string;
}

export const InputForm = ({
  label,
  register,
  error,
  type,
  placeholder,
}: IInputProps) => (
  <fieldset>
    {label && <label htmlFor={register.name}>{label} </label>}
    <input
      type={type}
      placeholder={placeholder}
      {...register}
    />
    {error ? (
      <p>{error.message}</p>
    ) : null}
  </fieldset>
);
