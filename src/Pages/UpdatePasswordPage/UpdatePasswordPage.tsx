import {Form} from '../MyProfile/styles'
import {InputUpdatePassword} from '../../components/InputUpdatePassword/Input'
import {useForm} from 'react-hook-form';
import { IUpdateFormPassword } from '../../provides/TypesUser';
import { UserContext } from '../../provides/UserContext';
import { useContext } from 'react';

export const UpdatePasswordPage = ()=>{
    const {register,handleSubmit} = useForm<IUpdateFormPassword>({});

    const {updatePasswordUser} = useContext(UserContext);
    return (
        <Form onSubmit={handleSubmit(updatePasswordUser)}>
          
        </Form>
    )
}