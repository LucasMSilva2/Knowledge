import styled, {keyframes} from "styled-components";
import Button from "./Button";

export const LoginArea = styled.div`
  display: flex;
  background-color: #193557;
  justify-content: center;
`;
export const FormContainer = styled.div`
  display: flex;
  height: 400px;
  width: 700px;
  background-color: #fff;
  margin-top: 5%;
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FormButton = styled(Button)`
  margin-top: 20px;
  width: 80%;
  font-size: 14px;
  border-radius: 10px;
`
export const FormFooter = styled.div`
  width: 80%;
  height: 30px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`
export const Texto = styled.p`
  color: black;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`

export const CampoInput = styled.div`
flex-direction: row;
height: 50px;
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
`
export const InputContainerInitial = styled.div`
  width: 100%;
  margin-top: 0px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  height: 40px;
  border: solid;
  border-width: 0.5px;
  border-color: #ccc;
  border-radius: 8px;
  trasition: 0.5s;
  &:hover{
    background: #f7f7f7;
  }
`

export const InputField = styled.input`
  border: 1px black;
  background: transparent;
  font-size: 14px;
  width: 80%;
`

export const Selector = styled.button`
width: 25%;
height: 40px;
background-color: transparent;
border-bottom: 1px solid #c4c4c4;
border-radius: 5px;
`
export const ButtonCadastrar = styled.button`
background: #333;
border: none;
border-radius: 8px;
color: #fff;
width: 100px;
transition: 0.3s;
    &:hover {
        color: #333;
        background: #ccc;
        font-weight: bold;
    }
`