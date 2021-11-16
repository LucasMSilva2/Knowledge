import React from 'react'
import {InputContainer, InputLabel, InputField, InputError} from './styles'

export default ( props ) => {
    return (
        <InputContainer>
            <InputLabel htmlFor= 'email'>{props.label}</InputLabel>
            <InputField onChange={props.OnChange} type='text' id='email'/>
            <InputError>{props.tam < 1 ? (<p>Por favor preencha o campo</p>) : <p></p>}</InputError>
         </InputContainer>
    )
}