import React from "react";
import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message";

import './Messages.css';

const MessagesContainer = styled.div`
background-color: pink;
height: 20%;
`;


const Messages = ({ messages, name }) => {
    console.log("### INSIDE MESSAGES");
    console.log(messages);
    return (
            <ScrollToBottom className="scrollMessages">
                {messages.map((message,i) => 
                    <div key={i}>
                        <Message message={message} name={name}/>
                    </div>
                )}
            </ScrollToBottom>

    );
}

export default Messages;
