import React from "react";
import styled from "styled-components/macro";

import AddMargin from "../../components/AddMargin";

import { Link } from "react-router-dom";

// CSS for this section
import '../../App.css';
const MiddleSectionContainer = styled.div`
    color: var(--yellow);
    width: 100%;
    
    background: var(--yellow);
    display: flex;
    justify-content: center;
`;

const InputContainer = styled.div`
    max-width: 100%;
    margin: 0 auto;
`

const FormContainer = styled.form`
    min-width: 400px;
    background: var(--yellow);
    border-radius: 5px;
    margin: 13rem auto;
    width: 28%;
    height: 33rem;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--black);
    box-shadow: 0px 0px 1rem rgba(0,0,0,0.8);
`

const LabelWrapper = styled.label`
    float: left;
`

const InputWrapper = styled.input`
    width: 100%;
    margin: 5px;
`

const CheckBoxWrapper = styled.input`
    float: left;
    width: 1.2rem;
    border-radius: 8px;
`

const SpanWrapper = styled.span`
    float: right;
    
`

const ButtonWrapper = styled.button`
    font-weight: bold;
    color: white;
    background-color: var(--black);
    width: 102%;
    border-radius: 5px;
    height: 2.5rem;
    margin: 0 4px;
`

function MiddleSection(props) {
    return <MiddleSectionContainer>
        <FormContainer action="submit">
            <InputContainer>
                <AddMargin direction="vertical" margin={30} />
                <h1>Sign in to your account</h1>
                <LabelWrapper htmlFor="email">Email</LabelWrapper>
                <AddMargin direction="vertical" margin={20} />
                <br/>
                <InputWrapper type="text" required />
                <AddMargin direction="vertical" margin={10} />
                <br/>
                <LabelWrapper htmlFor="password">Password</LabelWrapper><SpanWrapper><a href="">Forgot your password?</a></SpanWrapper>
                <AddMargin direction="vertical" margin={20} />
                <br/>
                <InputWrapper type="password" required />
                <AddMargin direction="vertical" margin={20} />
                <CheckBoxWrapper type="checkbox" />
                <AddMargin direction="vertical" margin={10} />
                <LabelWrapper>Remember me</LabelWrapper>
                <br/>
                <AddMargin direction="vertical" margin={30} />
                <ButtonWrapper>Login</ButtonWrapper>
                <AddMargin direction="vertical" margin={10} />
                <Link to="/register">
                <SpanWrapper><a href="">Register</a></SpanWrapper>
                </Link>
            </InputContainer>
        </FormContainer>
    </MiddleSectionContainer>
}

export default MiddleSection;