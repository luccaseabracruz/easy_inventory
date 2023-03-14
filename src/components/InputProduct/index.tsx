import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form"
import { IProduct } from "../../provides/TypesProduct";
import { StyledInputContainer } from "./style"

interface IInputProductProps{
    label: string;
    placeholder: string;

    inputKey: 'image' | 'name' | 'id' | 'price' | 'category' | 'qtd' | 'description' | 'sales';

    defaultValue?: string;
    register: UseFormRegister<IProduct>;
    // Inputerror?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> |  undefined;
    vendidos?:number;
}

export const InputProduct = ({ label, placeholder, inputKey, defaultValue,vendidos, register}: IInputProductProps) => {


    return (
        <StyledInputContainer>
            <label htmlFor={inputKey}>{label}</label>
            <input type="text" id={inputKey} placeholder={placeholder} value={vendidos} defaultValue={defaultValue} {...register(inputKey)}/>
        </StyledInputContainer>
    )
}