import { Inputs } from '../../components/Inputs/Inputs';
import { Form } from './styles';
import {useForm} from 'react-hook-form';
import {iFormValuesMyProfile, IUser} from '../../provides/TypesUser'
import { useContext, useEffect } from 'react';
import {UserContext} from '../../provides/UserContext'
import { api } from '../../services/api';


export const MyProfile = () => {

    const {getDatasFormPageMyProfile,user} = useContext(UserContext);
    const {register,handleSubmit} = useForm<iFormValuesMyProfile>({});

    
    useEffect(()=>{
        const getDatasUser = async ()=>{
            const id :IUser = user as IUser;
            try{
                const token = localStorage.getItem('@TOKEN') as string;
                const response = await api.get(`/users/${id}`,{headers:{
                    Authorization: `Bearer ${JSON.parse(token)}`
                }})
                console.log(response);
            }catch (error){
                console.log(error)
            }
        }
        getDatasUser();
    },[user]);


    return (
        <>
        <h1>Olá </h1>
   
        </>
    )
}