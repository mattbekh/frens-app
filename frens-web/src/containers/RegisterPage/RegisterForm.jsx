import React, {useContext} from 'react';
import {SubmitButton, Input, FormContainer, BoxContainer, Label, MutedLink, BoldLink} from "./CommonElement";
import {RegisterContext} from "./RegisterContext";


const RegisterForm = () => {
    const {switchToInFo} = useContext(RegisterContext);
    return (
        <BoxContainer>
            <FormContainer>
                <Label>Email</Label>
                <Input type= "email" placeholder = "Email"/>
                <Label>Password</Label>
                <Input type= "password" placeholder = "Password"/>
                <SubmitButton onClick = {switchToInFo}> Next </SubmitButton>
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
