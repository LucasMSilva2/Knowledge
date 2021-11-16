import React from "react";
import api from "../../services/api";
import {
  LoginArea,
  FormContainer,
  FormButton,
  FormFooter,
  Texto,
  ButtonCadastrar,
  InputContainerInitial,
  InputField,
  Selector
} from "./styles";
import Logo from "./Logo/Logo";
import InputFieldGroup from "./InputFieldGroup";
import InputInitial from "./InputInital";
import { useHistory } from "react-router-dom";

export default () => {
  const navigate = useHistory();
  const [password, setPassword] = React.useState("a");
  const [usermethod, setUsermethod] = React.useState("a");

  const logar = () => {
    console.log(password, usermethod)
      api
      .post("users/login/", {
      username: usermethod,
        password: password,
      })
      .then(() => {
        console.log("fucionou");
        navigate.push("/home", { logado: true, usermethod: usermethod});
      })
      .catch((err) => {
        window.alert(err);
      });
    }
  {
    /*
    alunoreacttest
    123123
    lucasteste@gmail.com
*/
  }
  return (
    <>
      <LoginArea>
        <FormContainer>
          <Logo />

          <InputFieldGroup
            label="Email ou senha"
            OnChange={(e) => setUsermethod(e.target.value)}
            tam={usermethod.length}

          />


          <InputFieldGroup
            label="Senha"
            OnChange={(e) => setPassword(e.target.value)}
            tam={password.length}

          />

          <FormButton onClick={() => logar()}>Entrar</FormButton>
          <FormFooter>
            <ButtonCadastrar onClick={() => navigate.push("/cadastro")}>Cadastrar</ButtonCadastrar>
          </FormFooter>
        </FormContainer>
      </LoginArea>
    </>
  );
};

{
  /*
import React from 'react';
import {LoginArea, FormContainer, FormButton, FormFooter, Texto} from './Styles'
import Logo from './Logo/Logo'
import InputFieldGroup from './InputFieldGroup/Index'

const Login = () => {
    return(
        <LoginArea>
            <FormContainer>
                <Logo/>
                    <InputFieldGroup label='Email'onChange={(e) => setEmail(e.target.value)/>
                    <InputFieldGroup label='Senha' onChange={(e) => setPassword(e.target.value)}/>
                    <InputFieldGroup label='Username' onChange={(e) => setUsername(e.target.value)}/>
                    <FormButton onClick={logar}>Entrar</FormButton>
                    <FormFooter>
                        <Texto>Cadastrar-se</Texto>
                        <Texto>Voltar</Texto>
                    </FormFooter>
            </FormContainer>
        </LoginArea>
    )
}

export default Login
*/
}
