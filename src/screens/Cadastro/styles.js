import styled from "styled-components";
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
`;
export const FormFooter = styled.div`
  width: 80%;
  height: 30px;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;
export const Texto = styled.p`
  color: black;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: #ccc;
  }
`;

export const ButtonLogar = styled.button`
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
`;
