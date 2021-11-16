import React from 'react';
import {ContainerNome, ContainerText, CText, LabelTitle} from './styles'

export default ( props ) =>{
    return(
        <ContainerNome>
            <ContainerText>
                <CText>{props.p}</CText>
            </ContainerText>
        </ContainerNome>
    )
};