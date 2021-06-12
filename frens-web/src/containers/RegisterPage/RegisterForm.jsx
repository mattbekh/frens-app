import React, {useContext} from 'react';
import {SubmitButton, Input, FormContainer, BoxContainer, Label, MutedLink, BoldLink} from "./CommonElement";
import {RegisterContext} from "./RegisterContext";


import AddMargin from "../../components/AddMargin";
import styled from "styled-components/macro";

const LabelWrapper = styled.label`
    margin: 0 0 0 3.8rem;
    align-self: start;
`

const RegisterForm = () => {
    const {switchToInFo} = useContext(RegisterContext);
    return (
        <BoxContainer>
            <FormContainer>
                    <LabelWrapper htmlFor="email">Email</LabelWrapper>
                <AddMargin direction="vertical" margin={20} />
                
                    <Input type= "email"/>
                <AddMargin direction="vertical" margin={10} />
                <br/>
                    <LabelWrapper htmlFor="password">Password</LabelWrapper>
                <AddMargin direction="vertical" margin={20} />
                 
                    <Input type= "password"/>
                <br/>
                <SubmitButton onClick = {switchToInFo}>Next</SubmitButton>
                <AddMargin direction="vertical" margin={10} />
                <MutedLink>
                    Already have an account?
                    <BoldLink to={{ pathname: '/signin', state: { theme: `poo`}}}>
                        Sign in!
                    </BoldLink>
                </MutedLink>
            </FormContainer>
        </BoxContainer>

    );
};

export default RegisterForm;
