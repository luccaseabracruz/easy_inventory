import { ReactNode } from 'react';
import { useForm,Path,UseFormRegister } from 'react-hook-form';
import { Input } from './styles';
import {iFormValuesMyProfile,IUser} from '../../provides/TypesUser';


interface iNameInputs{
    nameInput:Path<iFormValuesMyProfile>;
    type:string;
    register:UseFormRegister<iFormValuesMyProfile>;
    error?:ReactNode;
    value?:string;
    
}

export type TypeInputs = 'text' | 'email' | 'password';

export const Inputs = ({nameInput,type,register,error,value}:iNameInputs)=>{


    return(
        <Input type={type} defaultValue={nameInput} value={value} {...register(nameInput)} />
    )
}
