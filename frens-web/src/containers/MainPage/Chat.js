import React, {useState} from 'react';
import {BsChat} from "react-icons/all";
import styled from "styled-components";
import ChatBlock from "./ChatBlock";





const ChatWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ChatButton = styled.button`
  width: min-content;
  border-style: hidden;
  color: white;
  text-align: center;
  text-decoration: none;
  border-radius: 60%;
  &:hover {
    border: 2px solid white;
  }
`;


function Chat(props) {
    const [popChat, setPopChat] = useState(false);

    const openPopChat = () => {
        console.log(popChat)
        setPopChat(prev =>!prev);
    }

    return (
        <ChatWrapper>
            <ChatBlock popChat = {popChat} setPopChat = {setPopChat}/>
            <ChatButton onClick= {()=> openPopChat()}>
                <BsChat size={38}/>
            </ChatButton>
        </ChatWrapper>
    );
}

export default Chat;