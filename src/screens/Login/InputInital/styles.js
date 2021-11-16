import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
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

export const InputContainerInitial = styled.div`
  width: 80%;
  margin-top: 0px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
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

export const InputLabel = styled.label`
  color: black;
  font-size: 12px;
  margin-left: 5px;
`
export const InputField = styled.input`
  outline: none;
  border: none;
  background: transparent;
  font-size: 14px;
  margin-top: 2px;
`
export const InputError = styled.p`
  position absolute;
  font-size: 11px;
  color: red;
  top: 43px;
`