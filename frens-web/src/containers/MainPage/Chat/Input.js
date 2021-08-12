import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
display: flex;
border-top: 1px solid #D3D3D3;
`;

const InputContainer = styled.input`
border: none;
border-radius: 0;
padding: 10px;
width: 80%;
font-size: 1.2em;
`;

const SendButton = styled.button`
color: #000 !important;
text-transform: uppercase;
text-decoration: none;
background-color: #FFBE0B;
padding: 20px;
display: inline-block;
border: none;
width: 20%;
`;

const Input = ({ message, setMessage, sendMessage }) => {
    return (
        <FormContainer>
            <InputContainer
            className="input-container" 
            type="text"
            placeholder="Send a message..."
            value={message} 
            onChange={(event)=>{setMessage(event.target.value)}}
            onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null}
            />
            <SendButton onClick={(event)=> {sendMessage(event)}}>SEND</SendButton>
        </FormContainer>
    );
}

export default Input;