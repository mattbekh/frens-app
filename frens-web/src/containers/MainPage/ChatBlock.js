import React, { useState, useEffect } from "react";
import styled, {ThemeProvider} from "styled-components";
import { useSelector, useDispatch, connect} from "react-redux";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes.js";
import {clearChatRoom} from "../../actions";

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
    // Check redux isDark state
    const isDark = useSelector(state => state.isDark);
    if(isDark) {
        theme = "dark";
    } else {
        theme = "light";
    }

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    // let [defaultValues, setDefaultValues] = useState(0);

    const [socketObj, setSocketObj] = useState({});

    const currentUser = useSelector((state) => state.loginUser);
    const chatUser = props.user.newUser;


    useEffect( () => {
        let mRoom = "none";
        if(chatUser && currentUser) {
            if(chatUser._id && currentUser._id) {
                mRoom = createRoom(currentUser, chatUser);
            }
        }
        setRoom(mRoom);
    });
    
    useEffect( ()=> {
        // setDefaultValues(2);
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
            }
        }
    });

// Function for sending messages
const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
        setSocketObj(props.socket);
      // Emit message to server
      if(socketObj && socketObj.socket) {

        socket = socketObj.socket;
        socket.emit('sendMessage', {id: currentUser._id, message}, () => {
            setMessage("");
        })
      }
    }
}

async function disconnectSocket() {

    // Clear chat window... find work around
    setMessages([]);

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
                        <InfoBar name={props.user.newUser.username} room={room} disconnectSocket={disconnectSocket}/>
                        <Messages messages={messages} name={currentUser.username}/>
                        <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
                    </ChatContainer>
                </OuterContainer>
                </Block>
        </ThemeProvider>
    ) : "";
}

export default connect(mapStateToProps)(ChatBlock);