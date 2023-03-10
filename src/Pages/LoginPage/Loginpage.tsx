import React, { createContext } from "react";
import { StyledSection } from "./style";
import img from "../../assets/mulher-login.svg";
import { UserContext } from "../../provides/UserContext";
import { useContext } from "react";
import { FormLogin } from "../../components/Form/FormLogin";
import Header from "../../Header/Header";

export const Loginpage = () => {
  const { userLogin } = useContext(UserContext);

  return (
    <>
      <Header />
      <StyledSection>
        <div className="img__container">
          <img src={img} alt=""/>
        </div>
        <FormLogin />
      </StyledSection>
    </>
  );
};
