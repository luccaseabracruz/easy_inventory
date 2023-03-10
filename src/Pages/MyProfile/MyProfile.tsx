import { Inputs } from '../../components/Inputs/Inputs';
import { Form,H1 } from './styles';
import { useForm } from 'react-hook-form';
import { iFormValuesMyProfile, IUser } from '../../provides/TypesUser'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../provides/UserContext'
import { api } from '../../services/api';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { Outlet, useNavigate } from 'react-router-dom';
import {UpdatePasswordPage} from '../UpdatePasswordPage/UpdatePasswordPage'


export const MyProfile = () => {

    const navigate = useNavigate();
    const { getDatasFormPageMyProfile, userLogin, user, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm<iFormValuesMyProfile>({});


    useEffect(() => {
        const token = localStorage.getItem('@TOKEN');
        const id = localStorage.getItem('@user');

        const getDatasUser = async () => {
            try {
                const response = await api.get(`/users/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setUser(response.data);
            } catch (erros) {
                console.log(erros);
                navigate('/');
            }
        }
        getDatasUser();
    }, []);

    return (
        <>
            <H1>Olá {user?.name}, seja bem vindo</H1>
            <Form onSubmit={handleSubmit(getDatasFormPageMyProfile)}>
                <h2>Editar Usuario</h2>
                <Inputs nameInput='name' value={user?.name} name={user?.name} register={register} type={'text'} />

                <Inputs nameInput='email' name={user?.email} register={register} type={'email'} />

                <Inputs nameInput='avatar' name={''} placeholder={'Mudar avatar ( URL )'} register={register} type={'text'} />
                <button className='buttonGreen'>Salvar alterações</button>
            </Form>
            <UpdatePasswordPage/>
        </>
    )
}