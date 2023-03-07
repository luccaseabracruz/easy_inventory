import { Inputs } from '../../components/Inputs/Inputs';
import { Form } from './styles';
import {useForm} from 'react-hook-form';

import { iUsers } from '../../components/Inputs/Inputs';

export const MyProfile = () => {

    const {register,handleSubmit} = useForm({});

    return (
        <>
        <h1>Olá nome do Admin</h1>
        <Form>
            <Inputs name='nome do admin'/>
            <Inputs name='test1@mail.com'/>
            <Inputs name='Senha'/>
            <Inputs name='Confirmar senha'/>
            <Inputs name='Avatar'/>
            <button className='buttonGreen'>Salvar Alterações</button>
        </Form>
        </>
    )
}