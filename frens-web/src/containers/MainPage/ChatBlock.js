import React, { useState, useEffect } from "react";
import styled from "styled-components";
import io from "socket.io-client";

import InfoBar from "./Chat/InfoBar";
import Input from "./Chat/Input";
import Messages from "./Chat/Messages";

const OuterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #FFF;
`;

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid grey;
    height: 100%;
    width: 100%;
`;


const Block = styled.div`
  position: relative;
  width: min-content;
  height:600px;
  width: 400px;
  background: white;
`

let socket;
const ENDPOINT = "http://localhost:5000";

function ChatBlock(props) {
    const [user, setUser] = useState("");
    

    const name = "TempName"
    const room = "TempRoom"

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
      socket = io(ENDPOINT);
      setUser(props.user);
      // setName(name);
      // setRoom(room);

       socket.emit('join', { name, room }, () => {
           console.log("%%%%% NEW USER JOIN %%%%%%")
          //  alert(error);
       });

       return () => {
            socket.disconnect()
            socket.off();
       }
    }, []);

  useEffect( ()=> {
      socket.on('message', (message) => {
          setMessages([...messages, message]);
      })
  }, [messages]);

  // Function for sending messages
  const sendMessage = (event) => {
      event.preventDefault();

      if(message) {
          socket.emit('sendMessage', message, () => {
              setMessage("");
          })
      }

      console.log(message, messages);
  }


    return (props.popChat && props.user) ? (
        <Block>
          <OuterContainer>
            <ChatContainer>
                <InfoBar room={props.user[0]}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </ChatContainer>
          </OuterContainer>
        </Block>
    ) : "";
}

export default ChatBlock;