import React, {useState} from 'react';
import {BsChat} from "react-icons/all";
import styled from "styled-components";
import ChatBlock from "./ChatBlock";
import {useDispatch, useSelector} from "react-redux";
import {chatPop} from "../../actions";




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
    const isPop = useSelector(state => state.isPop)
    const chatUser = useSelector(state => state.chatUser); 
    const dispatch = useDispatch();
    return (
        <ChatWrapper>
            <ChatBlock popChat = {isPop} user={chatUser}/>
            <ChatButton onClick= {()=> dispatch(chatPop())}>
                <BsChat size={38}/>
            </ChatButton>
        </ChatWrapper>
    );
}

export default Chat;