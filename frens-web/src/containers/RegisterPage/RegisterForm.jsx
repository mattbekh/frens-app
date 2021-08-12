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
        const isValid = formValidation();
        if (isValid) {
            setBasic();
            switchToInFo()
        }
    }

    const [email, setEmail] = useState();
    const [password,setPassword] = useState();
    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});


    const formValidation = () => {
        const emailErr = {};
        const passwordErr = {};
        let isValid = true;
        if(!email){
            emailErr.emailEmpty = "email can't be empty"
            isValid = false;
        }

        if(!password) {
            passwordErr.passwordEmpty = "password can't be empty"
            isValid = false;
        }

        setEmailErr(emailErr);
        setPasswordErr(passwordErr);
        return isValid;
    }

    return (
        <BoxContainer>
            <FormContainer onSubmit = {onSubmit}>
                <Label>Email</Label>
                <Input type= "email" placeholder = "Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {Object.keys(emailErr).map((key)=>{return <div style={{color : "white"}}> {emailErr[key]} </div> })}
                <Label>Password</Label>
                <Input type= "password" placeholder = "Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                {Object.keys(passwordErr).map((key)=>{return <div style={{color : "white"}}> {passwordErr[key]} </div> })}
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
