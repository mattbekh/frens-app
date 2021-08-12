import React from "react";
import {BsChat} from "react-icons/all";
import styled from "styled-components";
import ChatBlock from "./ChatBlock";
import {useDispatch, useSelector} from "react-redux";
import {chatPop} from "../../redux/actions";

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
    const isPop = useSelector(state => state.isPop);
    const currentUser = useSelector((state) => state.loginUser);
    const chatUser = useSelector(state => state.chatUser); 
    const dispatch = useDispatch();
    const name = currentUser.username;

    function handleClick() {
      dispatch(chatPop());
    }
    
    return (
        <ChatWrapper>
            <ChatBlock passedSocket={props.socket} popChat = {isPop} name={name} user={chatUser} />
            <ChatButton onClick= {()=> handleClick()}>
                <BsChat size={38}/>
            </ChatButton>
        </ChatWrapper>
    );
}

export default Chat;