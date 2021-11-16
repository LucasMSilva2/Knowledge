import React from 'react'
import {InputContainer, InputLabel, InputField, InputError} from './styles'

export default ( props ) => {
    return (
        <InputContainer>
            <InputLabel htmlFor= 'email'>{props.label}</InputLabel>
            <InputField onChange={props.OnChange} type='text' id='email'/>
         </InputContainer>
    )
}