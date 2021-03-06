import React, { useState, useEffect } from "react";
import styled, {ThemeProvider} from "styled-components";
import { useSelector, useDispatch, connect} from "react-redux";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes.js";
import {clearChatRoom} from "../../redux/actions";

import InfoBar from "./Chat/InfoBar";
import Input from "./Chat/Input";
import Messages from "./Chat/Messages";

const OuterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 8px;
`;

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  border-radius: 8px;
`

const NoChat = styled.div`
    height: 100%;
    background-color: black;
`;

let socket;

function createRoom(mainUser, selectedUser) {
    if ((mainUser !== undefined) && (selectedUser !== undefined) && (selectedUser !== null)) {
        const mainId = mainUser._id.toString();
        const selectedId = selectedUser._id.toString();
        for( let i = 0; i < mainId.length; i++ ){
            if(mainId.charAt(i) > selectedId.charAt(i)){
                return mainId.concat(selectedId);
            } else if(mainId.charAt(i) < selectedId.charAt(i)){
                return selectedId.concat(mainId);
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        socket: state.socket,
        chatRoom: state.chatRoom
    }
}

function ChatBlock(props) {
    let theme = "light";
    const isDark = useSelector(state => state.isDark);
    if(isDark) {
        theme = "dark";
    } else {
        theme = "light";
    }

    const dispatch = useDispatch();
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [socketObj, setSocketObj] = useState({});
    const currentUser = useSelector((state) => state.loginUser);
    const chatUser = props.user.newUser;

    let display = true;
    if(!currentUser || !chatUser) {
        display = false;
    }

    useEffect( () => {
        let mRoom = "none";
        if(chatUser && currentUser) {
            if(chatUser._id && currentUser._id) {
                mRoom = createRoom(currentUser, chatUser);
            }
        }
        setRoom(mRoom);
    },[chatUser, currentUser]);
    
    useEffect( ()=> {
        if(props.socket) {
            setSocketObj(props.socket);
            if(socketObj.socket) {
                
                socket = socketObj.socket;

                socket.on('message', (message) => {
                    setMessages([...messages, message]);
                })

                socket.on('clearMessages', () => {
                    setMessages([]);
                })

                return () => {
                    socket.off("message");
                  };
            }    
        }  
    },[props.socket, socketObj.socket, messages]);

const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
        setSocketObj(props.socket);
      if(socketObj && socketObj.socket) {
        socket = socketObj.socket;
        socket.emit('sendMessage', {id: currentUser._id, message}, () => {
            setMessage("");
        })
      }
    }
}

async function disconnectSocket() {
    if(socketObj && socketObj.socket) {
        await setRoom(createRoom(currentUser, chatUser));
        dispatch(clearChatRoom())
        socket = socketObj.socket;
        socket.emit('leave', {id: currentUser._id, room})
    }
}

    return (props.popChat && props.user) ? (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
                <Block>
                <OuterContainer>
                    <ChatContainer>
                        {display && <InfoBar name={props.user.newUser.username} room={room} disconnectSocket={disconnectSocket}/>}
                        {display && <Messages messages={messages} name={currentUser.username}/>}
                        {display && <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>}
                        {!display && <NoChat><p>Please select a user to chat with</p></NoChat>}
                    </ChatContainer>
                </OuterContainer>
                </Block>
        </ThemeProvider>
    ) : "";
}

export default connect(mapStateToProps)(ChatBlock);