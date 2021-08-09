import React from "react";
import styled, {ThemeProvider} from "styled-components";
import { useSelector} from "react-redux";
import { lightTheme, darkTheme, GlobalStyles } from "../../../themes.js";
import ReactEmoji from "react-emoji";

const MessageContainerCurrent = styled.div`
display: flex;
padding: 0 2%;
margin-top: 3px;
width: 96%;
justify-content: flex-end;
`;

const MessageContainerOther = styled.div`
display: flex;
padding: 0 2%;
margin-top: 3px;
width: 96%;
justify-content: flex-start;
`;

const MessageBoxCurrent = styled.div`
border-radius: 20px;
padding: 0px 20px;
display: inline-block;
max-width: 80%;
background-color: #FFBE0B;
`;

const MessageBoxOther = styled.div`
border-radius: 20px;
padding: 0px 20px;
display: inline-block;
max-width: 80%;
`;

const MessageText = styled.p`
width: 100%;
letter-spacing: 0;
float: left;
font-size: 1.1em;
word-wrap: break-word;
`;

const UserName = styled.p`
margin: 5px;
letter-spacing: 0;
color: grey;
`;


const Message = ({ message: { user, text}, name }) => {
    let theme = "light";
    // Check redux isDark state
    const isDark = useSelector(state => state.isDark);
    if(isDark) {
        theme = "dark";
    } else {
        theme = "light";
    }

    let isSentByCurrentUser = false;
    // const trimmedName = name.trim().toLowerCase();
    const trimmedName = name.trim();
    if( user === trimmedName) {
        isSentByCurrentUser = true;
    }

    return (
        
        isSentByCurrentUser
        ? (
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <MessageContainerCurrent>
                <UserName>{trimmedName}</UserName>
                <MessageBoxCurrent >
                    <MessageText className="message-text-current">{ReactEmoji.emojify(text)}</MessageText>
                </MessageBoxCurrent>
            </MessageContainerCurrent>
            </ThemeProvider>
        )
        : (
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <MessageContainerOther>
                <MessageBoxOther className="message-box">
                    <MessageText className="message-text">{ReactEmoji.emojify(text)}</MessageText>
                </MessageBoxOther>
                <UserName>{user}</UserName>
            </MessageContainerOther>
            </ThemeProvider>
        )
        
    );
}

export default Message;