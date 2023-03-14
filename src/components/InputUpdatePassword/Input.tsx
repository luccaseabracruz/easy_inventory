import {Input} from '../Inputs/styles';
import {IUpdateFormPassword} from '../../provides/TypesUser';
import { ReactNode } from 'react';
import { UseFormRegister,Path } from 'react-hook-form';



interface IInputsPassword{
    nameInput:Path<IUpdateFormPassword>;
    register:UseFormRegister<IUpdateFormPassword>;
    error?:ReactNode;
    name?:string | undefined;
    placeholder?:string;
}

export const InputUpdatePassword = ({nameInput,register,placeholder}:IInputsPassword) =>{



    return(
        <Input type='password'placeholder={placeholder} {...register(nameInput)} />
    )
}