import React, { createContext, useEffect } from "react";
import { StykedForm, StyledSection } from "./style";
import img from "../../assets/mulher-login.svg";
import { UserContext } from "../../provides/UserContext";
import { useContext } from "react";
import { FormLogin } from "../../components/Form/FormLogin";
import Header from "../../Header/Header";
import { useNavigate } from "react-router-dom";
import {api} from '../../services/api';

export const Loginpage = () => {
  const { userLogin } = useContext(UserContext);
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
      <StyledSection>
        <div>
          <img src={img} alt="" />
        </div>
        <FormLogin />
      </StyledSection>
    </>
  );
};
