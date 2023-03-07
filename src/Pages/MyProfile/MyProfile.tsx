import { Inputs } from '../../components/Inputs/Inputs';
import { Form } from './styles';
import {useForm} from 'react-hook-form';
import {iFormValuesMyProfile} from '../../provides/@types'
import { useContext } from 'react';
import {UserContext} from '../../provides/UserContext'


export const MyProfile = () => {

    const {getDatasForm,user} = useContext(UserContext);
    const {register,handleSubmit} = useForm<iFormValuesMyProfile>({});

    

    return (
        <>
        <h1>Olá nome do Admin</h1>
        <Form onSubmit={handleSubmit(getDatasForm)}>
            <Inputs type='text' nameInput='name' register={register} />
            <Inputs type='email' nameInput='email' register={register}/>
            <Inputs type='password' nameInput='password' value='' register={register}/>
            <Inputs type='password' nameInput='ConfirmPassword' value='' register={register}/>
            <Inputs type='text' nameInput='avatar' register={register}/>
            <button className='buttonGreen'>Salvar Alterações</button>
        </Form>
        </>
    )
}