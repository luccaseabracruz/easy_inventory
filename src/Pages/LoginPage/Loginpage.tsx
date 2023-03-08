import React, { createContext } from "react";
import { StykedForm, StyledSection } from "./style";
import img from "../../assets/mulher-login.svg";
import { UserContext } from "../../provides/UserContext";
import { useContext } from "react";
import { InputForm } from "../../components/InputForm/InputForm";
import { FormLogin } from "../../components/Form/FormLogin";
import Header from "../../Header/Header";

export const Loginpage = () => {
  const { userLogin } = useContext(UserContext);

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
