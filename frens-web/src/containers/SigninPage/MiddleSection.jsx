import React from "react";
import styled from "styled-components/macro";

import AddMargin from "../../components/AddMargin";

import { Link } from "react-router-dom";

// CSS for this section
import '../../App.css';

const MiddleSectionContainer = styled.div`
    color: var(--yellow);
    width: 100%;
    height: 70vh;
    background: none;
    position: absolute;
    display: flex;
    margin: 0 auto;

`;

const InputContainer = styled.div`
    max-width: 100%;
    min-width: 75%;
    margin: 0 auto;
`

const FormContainer = styled.form`
    min-width: 400px;
    border-radius: 5px;
    margin: 9rem auto;
    width: 28%;
    height: 33rem;
    display: flex;
    flex-direction: column;
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
    font-weight: 900;
    width: 102%;
    border-radius: 5px;
    
    height: 2.8rem;
    margin: 0 4px;
`

function MiddleSection(props) {
    return <MiddleSectionContainer>
        <FormContainer action="submit" className="login-form">
            <InputContainer>
                <AddMargin direction="vertical" margin={30} />
                <h2>Sign in to your account</h2>
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
                <ButtonWrapper className="login-button">Login</ButtonWrapper>
                <AddMargin direction="vertical" margin={10} />
                <Link to="/register">
                <SpanWrapper><a href="">Register</a></SpanWrapper>
                </Link>
            </InputContainer>
        </FormContainer>
    </MiddleSectionContainer>
}

export default MiddleSection;