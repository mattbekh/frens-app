import React, {useContext, useState} from 'react';
import {SubmitButton, Input, FormContainer, BoxContainer, Label, MutedLink, BoldLink} from "./CommonElement";
import {RegisterContext} from "./RegisterContext";


const RegisterForm = ({user}) => {

    const {switchToInFo} = useContext(RegisterContext);
    const setBasic = () => {
        user.email = email
        user.password = password
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (email && password) {
            setBasic();
            console.log(user.email);
            console.log(user.password);
        }
        switchToInFo()
    }

    const [email, setEmail] = useState();
    const [password,setPassword] = useState();

    return (
        <BoxContainer>
            <FormContainer onSubmit = {onSubmit}>
                <Label>Email</Label>
                <Input type= "email" placeholder = "Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Label>Password</Label>
                <Input type= "password" placeholder = "Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <SubmitButton> Next </SubmitButton>
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
