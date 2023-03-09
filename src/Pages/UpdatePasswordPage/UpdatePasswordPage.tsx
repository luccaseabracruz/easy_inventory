import {Form} from '../MyProfile/styles'
import {InputUpdatePassword} from '../../components/InputUpdatePassword/Input'
import {useForm} from 'react-hook-form';
import { IUpdateFormPassword } from '../../provides/TypesUser';
import { UserContext } from '../../provides/UserContext';
import { useContext } from 'react';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export const UpdatePasswordPage = ()=>{

    const schema = yup.object({}).shape({
        password:yup.string().required('Senha obrigatoria').min(6,'Minimo 6 caracteres')
        .matches(/(\d)/, 'Deve ter pelo menos 1 numero')
        .matches(/[a-z]/, 'Deve ter pelo menos uma letra minuscula')
        .matches(/[A-Z]/, 'Deve ter pelo menos uma letra maiuscula')
        .matches(/(\W|_)/, 'Deve ter pelo menos 1 simbolo'),
        confirmPassword: yup.string().oneOf([yup.ref('password')],'Senhas não iguais')
    })
    const {register,handleSubmit,formState:{errors}} = useForm<IUpdateFormPassword>({
        resolver:yupResolver(schema)
    });

    const {updatePasswordUser} = useContext(UserContext);
    return (
        <Form onSubmit={handleSubmit(updatePasswordUser)}>

          <h2>Alterar senha</h2>
          <InputUpdatePassword nameInput='password' placeholder='Senha' register={register}/>
            {errors.password?.message}

          <InputUpdatePassword nameInput='confirmPassword' placeholder='Confirmar Senha ' register={register}/>
          {errors.confirmPassword?.message}

          <button className='buttonGreen'>Mudar senha</button>
        </Form>
    )
}