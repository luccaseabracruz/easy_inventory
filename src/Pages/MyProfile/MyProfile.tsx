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

    useEffect(() => {

        const getDatasUser = async () => {
            const { id } = { ...user };

            if (!id == undefined) {
                try {
                    setNumberId(id as number)
                    const token = localStorage.getItem('@TOKEN') as string;
                    console.log(token);
                    const response = await api.get(`/users/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    console.log(response);
                    setDataUser(response.data)
                } catch (error) {
                    
                }
            }
        }
        getDatasUser();
    }, [userLogin]);

    useEffect(() => {
        const renderInfoUser = async () => {
            console.log(numberId);
            try {
                const token = localStorage.getItem('@TOKEN') as string;
                console.log(token);
                const response = await api.get(`/users/${numberId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log(response);
                setDataUser(response.data)
            }

             catch (error) {
                console.log(error)
            }
        }
            renderInfoUser();

        }, [numberId])
    return (
        <>
            <h1>Olá </h1>

        </>
    )
}