import { Inputs } from '../../components/Inputs/Inputs';
import { Form } from './styles';
import { useForm } from 'react-hook-form';
import { iFormValuesMyProfile, IUser } from '../../provides/TypesUser'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../provides/UserContext'
import { api } from '../../services/api';


export const MyProfile = () => {

    const { getDatasFormPageMyProfile, userLogin, user } = useContext(UserContext);
    const { register, handleSubmit } = useForm<iFormValuesMyProfile>({});
    const [dataUser, setDataUser] = useState<IUser | number>(0);
    const [numberId, setNumberId] = useState<number>(0);

    
    useEffect(()=>{
        userLogin;
        const {id} =  user as IUser;
        console.log(id);
    },[]);

    useEffect(()=>{
        console.log(user);
    },[user]);

    return (
        <>
            <h1>Olá </h1>

        </>
    )
}