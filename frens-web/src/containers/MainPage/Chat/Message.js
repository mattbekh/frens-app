import React from "react";
import styled from "styled-components";
import ReactEmoji from "react-emoji";

const MessageContainer = styled.div`
display: flex;
justify-content: center;
padding: 0 5%;
margin-top: 3px;

`;

const MessageBoxCurrent = styled.div`
background-color: #F3F3F3;
border-radius: 20px;
padding: 5px 20px;
color: black;
display: inline-block;
max-width: 80%;
background-color: #FFBE0B;
`;

const MessageBoxOther = styled.div`
background: light grey;
border-radius: 20px;
padding: 5px 20px;
color: black;
display: inline-block;
max-width: 80%;
background-color: #b8b8b8;
`;

const MessageText = styled.p`
width: 100%;
letter-spacing: 0;
float: left;
font-size: 1.1em;
word-wrap: break-word;
color: black;
`;


const Message = ({ message: { user, text}, name }) => {
    let isSentByCurrentUser = false;
    const trimmedName = name.trim().toLowerCase();
    
    if( user === trimmedName) {
        isSentByCurrentUser = true;
    }

    console.log(user, text, name);
    return (
        isSentByCurrentUser
        ? (
            <MessageContainer>
                <p>{trimmedName}</p>
                <MessageBoxCurrent>
                    <MessageText>{ReactEmoji.emojify(text)}</MessageText>
                </MessageBoxCurrent>
            </MessageContainer>
        )
        : (
            <MessageContainer>
                <MessageBoxOther>
                    <MessageText>{ReactEmoji.emojify(text)}</MessageText>
                </MessageBoxOther>
                <p>{user}</p>
            </MessageContainer>
        )
        
    );
}

export default Message;