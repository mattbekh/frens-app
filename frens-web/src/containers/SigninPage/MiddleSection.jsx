import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import AddMargin from "../../components/AddMargin";

const FormContainer = styled.form`
  height: 33rem;
  width: 34rem;
  border-radius: 5px;
  margin: 6rem auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 550px) {
    width: 27rem;
    min-width: 27rem;
  }
`;

const InputContainer = styled.div`
  max-width: 100%;
  min-width: 75%;
  margin: 0 auto;
`;

const LabelWrapper = styled.label`
  float: left;
`;

const InputWrapper = styled.input`
  width: 100%;
  margin: 5px;
  font-size: 24px;
  text-align: center;
`;

const CheckBoxWrapper = styled.input`
  float: left;
  width: 1.2rem;
  border-radius: 8px;
`;

const SpanWrapper = styled.span`
  float: right;
`;

const ButtonWrapper = styled.button`
  font-weight: 900;
  width: 102%;
  border-radius: 5px;
  height: 2.8rem;
  margin: 0 4px;
  &:hover {
    filter: brightness(1.5);
    transition: 0.5s;
  }
`;

function MiddleSection(props) {
  const history = useHistory();
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");

  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event) {
    setPassword(event.target.value);
  }

  let reset = () => {
    setEmail("");
    setPassword("");
  };

  function handleLogin() {
    if (userEmail && userPassword) {
      let body = { email: userEmail, password: userPassword };
      axios
        .post(`/login`, body)
        .then((response) => {
          localStorage.setItem("profile", JSON.stringify({ ...response.data }));
          if (response.status === 200) {
            history.push("/main");
          }
        })
        .catch((err) => {
          alert("Incorrect Credentials");
        });
      reset();
    } else {
    }
  }

  return (
    <div>
      <FormContainer
        action="/users/login"
        method="post"
        className="login-form"
        id="login-form"
      >
        <InputContainer>
          <AddMargin direction="vertical" margin={30} />
          <h2>Sign in to your account</h2>
          <LabelWrapper htmlFor="email">Email</LabelWrapper>
          <AddMargin direction="vertical" margin={20} />
          <br />
          <InputWrapper
            type="text"
            name="email"
            onChange={handleChangeEmail}
            value={userEmail}
            required
          />
          <AddMargin direction="vertical" margin={10} />
          <br />
          <LabelWrapper htmlFor="password">Password</LabelWrapper>
          <Link to="/comingsoon">
            <SpanWrapper>
              Forgot your password?
            </SpanWrapper>
          </Link>
          <AddMargin direction="vertical" margin={20} />
          <br />
          <InputWrapper
            type="password"
            name="password"
            onChange={handleChangePassword}
            value={userPassword}
            required
          />
          <AddMargin direction="vertical" margin={20} />
          <CheckBoxWrapper type="checkbox" onClick={()=>{alert('Sorry, "Remember Me" functionality coming soon!')}} />
          <AddMargin direction="vertical" margin={10} />
          <LabelWrapper >Remember me</LabelWrapper>
          <br />
          <AddMargin direction="vertical" margin={30} />

          <ButtonWrapper
            className="login-button"
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </ButtonWrapper>
          <AddMargin direction="vertical" margin={10} />
          <Link to="/register">
            <SpanWrapper>Register</SpanWrapper>
          </Link>
        </InputContainer>
      </FormContainer>
    </div>
  );
}

export default MiddleSection;
