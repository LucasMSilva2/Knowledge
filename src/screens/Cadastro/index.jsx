import React from "react";
import api from "../../services/api";
import {
  LoginArea,
  FormContainer,
  FormButton,
  FormFooter,
  Texto,
  ButtonLogar
} from "./styles";
import Logo from "./Logo/Logo";
import InputFieldGroup from "./InputFieldGroup";
import { useHistory } from "react-router-dom";

export default () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("a");
  const [password, setPassword] = React.useState("a");
  const [email, setEmail] = React.useState("a");

  const cadastrar = () => {
    console.log(username, password, email);
    api
      .post("users/", {
        username: username,
        password: password,
        email: email,
      })
      .then(() => {
        history.push("/home", { logado: true, usermethod: username });
      })
      .catch((err) => {
        window.alert(err);
      });
  };

  

  return (
    <>
      <LoginArea>
        <FormContainer>
          <Logo />
          <InputFieldGroup
            label="Email"
            OnChange={(e) => setEmail(e.target.value)}
            tam={email.length}
          />

          <InputFieldGroup
            label="Senha de até 6 digitos"
            tam={password.length}
            OnChange={(e) => setPassword(e.target.value)}
          />

          <InputFieldGroup
            tam={username.length}
            label="Username nome único"
            OnChange={(e) => setUsername(e.target.value)}
          />

          <FormButton onClick={() => cadastrar()}>Concluir</FormButton>
          <FormFooter>
            <ButtonLogar onClick={() => history.push("/login")}>Logar</ButtonLogar>
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
