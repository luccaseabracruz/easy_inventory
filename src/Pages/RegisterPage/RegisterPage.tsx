import React, { useEffect } from "react";
import { FormRegister } from "../../components/Form/FormRegister";
import { InputForm } from "../../components/InputForm/InputForm";
import { Inputs } from "../../components/Inputs/Inputs";
import Header from "../../Header/Header";
import {api} from '../../services/api';
import {useNavigate} from 'react-router-dom';

export const RegisterPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      const id = localStorage.getItem('@user');
      async function checkToken(){
        try {
          const response = await api.get(`users/${id}`,{headers:{
            Authorization: `Bearer ${token}`
          }})
          navigate('/dashboard');
        } 
        catch (errors) {
          localStorage.clear();
          }
        }
        checkToken();
    }

  }, [])
  return (
    <>
      <Header />
      <FormRegister />
    </>
  );
};
