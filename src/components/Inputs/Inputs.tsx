import { useForm } from 'react-hook-form';
import { Input } from './styles';

interface iDatasUser{
    email?:string;
    name?:string;
    id?:number;
}

export interface iUsers{
    accessToken:string;
    user:iDatasUser
}

export type TypeInputs = 'text' | 'email' | 'password';

export const Inputs = ({email,id,name}:iDatasUser)=>{
    const {register,handleSubmit} = useForm({});



    return(
        <Input  defaultValue={name} />
    )
}