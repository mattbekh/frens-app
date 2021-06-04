import React from 'react';
import MiddleUI from "./MiddleUI";
import styled from  "styled-components";

const RegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
`;

const RegisterPage = () => {
    return (
        <RegisterContainer>
            <MiddleUI/>
        </RegisterContainer>
    );
};

export default RegisterPage;
