import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import {
  IDefaultProviderProps,
  ILoginValues,
  IRegisterFormValues,
  IUser,
  IUserContext,
  IResponseFormLogin,
  iFormValuesMyProfile,
  IUpdateFormPassword
} from "./TypesUser";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>({} as IUser);
  const [loading, setLoading] = useState<boolean>(false);
  const [checkUser,setCheckUser] = useState<IResponseFormLogin | boolean>(false);



  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      await api.post("/register", formData);
      toast("usuário criado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: ILoginValues) => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem('@user', response.data.user.id);
      toast("login realizado com sucesso");
      navigate("/DashBoard");
      setCheckUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userlogout = async () => {
    try {
      setUser(null);
      localStorage.clear();
      navigate('/');
      toast.success('Deslogado com sucesso');
    } catch (error) {
      console.log(error);
    }
  };

  const getDatasFormPageMyProfile = async (datas: iFormValuesMyProfile) => {
    const array: any[] = [];

      if (datas.name.length !== 0) {
        array.push('name',{name:datas.name});
        console.log("nome")
      }
      if (datas.email.length !== 0) {
        array.push('email',{email:datas.email});
        console.log("email")
      }
      if (datas.avatar?.length !== 0) {
        array.push('avatar',{avatar:datas.avatar});
        console.log("avatar")
      }

      if(array.length == 0){
        toast.warning('Preencha pelo menos 1 campo');
      }else{
        const token = localStorage.getItem('@TOKEN');
        const id = localStorage.getItem('@user');

        const data = {
         name:array[0] == 'name' ? array[1].name : user?.name as string,
         email:array[2] == 'email' ? array[3].email : array[1].email || user?.email as string,
         avatar:array[4] == 'avatar' ? array[5].avatar : array[2] == 'avatar' ? array[3].avatar : array[1].avatar || user?.avatar as string,
        };
        const response = await api.patch(`/users/${id}`,data,{headers:{
          Authorization: `Bearer ${token}`
        }})
        console.log(response);
        //feedback
        toast.success('Usuario editado com sucesso');
        setUser(response.data);
      }

    };

    const updatePasswordUser = async (datas:IUpdateFormPassword) =>{
      try{
        const token = localStorage.getItem('@TOKEN');
        const id = localStorage.getItem('@user');
        const response  = await api.patch(`/users/${id}`,datas,{headers:{
          Authorization: `Bearer ${token}`
        }})
        toast.success('Senha alterada com sucesso');
        
      }catch (error){
        toast.error('Ops! algo deu errado');
      }

    }

    



  return (
    <UserContext.Provider
      value={{ loading, setLoading, user, userRegister, userLogin, userlogout, getDatasFormPageMyProfile, setUser,updatePasswordUser,checkUser,setCheckUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
