import React, { createContext } from "react";
import { StykedForm, StyledSection } from "./style";
import img from "../../assets/mulher-login.svg";
import { UserContext } from "../../provides/UserContext";
import { useContext } from "react";
import { InputForm } from "../../components/InputForm/InputForm";
import { FormLogin } from "../../components/Form/FormLogin";

export const Loginpage = () => {
  const { userLogin } = useContext(UserContext);

  return (
    <StyledSection>
      <div>
        <img src={img} alt="" srcset="" />
      </div>
      <StykedForm>
        <p>Login</p>
        <FormLogin />
      </StykedForm>
    </StyledSection>
  );
};
