import React from 'react';
import {SubmitButton, Input, FormContainer, BoxContainer, Label, MutedLink, BoldLink} from "./CommonElement";

const RegisterForm = () => {
    return (
        <BoxContainer>
            <FormContainer>
                <Label>Email</Label>
                <Input type= "email" placeholder = "Email"/>
                <Label>Password</Label>
                <Input type= "password" placeholder = "Password"/>
                <SubmitButton>Next</SubmitButton>
                <MutedLink>
                    Already have an account?
                    <BoldLink href = "#">
                        Sign in!
                    </BoldLink>
                </MutedLink>
            </FormContainer>
        </BoxContainer>

    );
};

export default RegisterForm;
