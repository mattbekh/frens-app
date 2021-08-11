/* Inspired by Will Code For View from youtube : https://www.youtube.com/watch?v=G00V4tRx1ME */

import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  secondaryColor: "#010101",
  primaryColor: "#FFBE0B",
  accentColor: "#FB5607",
  highlightColor: "#000000",
  shadow: "0px 0px 1rem rgba(255, 230, 0, 0.8)",
  shadowInset: "0px 10rem 10rem rgba(255, 230, 0, 0.8) inset",
  knobPos: "0 0 0 0",
  chatColor: "#101010",
  chatBoxColor: "#444444",
  chatTextColor: "#ffffff"
};

export const lightTheme = {
  secondaryColor: "#FFBE0B",
  primaryColor: "#010101",
  accentColor: "#FB5607",
  highlightColor: "#ffffff",
  shadow: "0px 0px 1rem rgba(0,0,0,0.8)",
  shadowInset: "0px 10rem 10rem rgba(0,0,0,0.8) inset",
  knobPos: "1rem 0 0 0",
  chatColor: "#ffffff",
  chatBoxColor: "#bdbdbd",
  chatTextColor: "#010101"
};

//global styles for theme switching
export const GlobalStyles = createGlobalStyle`
    .App {
        text-align: center;
    }
    body {
        background-color: ${(props) => props.theme.secondaryColor};
        color: ${(props) => props.theme.primaryColor};
        border-color: ${(props) => props.theme.primaryColor};
    }
    input {
        border-radius: 5px;
        height: 2.3rem;
        border: 1px solid grey;
    }
    a {
        text-decoration: none;
        font-weight: bold;
        color: ${(props) => props.theme.accentColor};
    } 
    button {
        color: ${(props) => props.theme.highlightColor};
        background-color: ${(props) => props.theme.primaryColor};
    }
    h2 {
        color: ${(props) => props.theme.primaryColor};
    }
    h3 {   
        color: ${(props) => props.theme.primaryColor};
    }
    .toggle-body {
        background-color: ${(props) => props.theme.secondaryColor};
        border-color: ${(props) => props.theme.primaryColor};
    }
    .toggle-knob {
        background-color: ${(props) => props.theme.primaryColor};
        margin: ${(props) => props.theme.knobPos};
    }
    /*WELCOME PAGE CSS*/
    .emptyContainer {
        background-color: none;
        border: solid 1px ${(props) => props.theme.primaryColor};
    }
    .emptyContainer-text {
        color: ${(props) => props.theme.primaryColor};
    }
    .fullContainer {
        background-color: ${(props) => props.theme.primaryColor};
    }
    .fullContainer-text {
        color: ${(props) => props.theme.secondaryColor};
    }
    .text-content-line {
        color: ${(props) => props.theme.primaryColor};
    }
    .welcome-nav {
        background-color: ${(props) => props.theme.secondaryColor};
        background: none;
    }
    /*SIGN IN PAGE CSS*/
    .login-button {
        color: ${(props) => props.theme.highlightColor};
        background-color: ${(props) => props.theme.primaryColor};
        border: none;
    }
    .login-form {
        border: 1px solid ${(props) => props.theme.primaryColor};
        box-shadow: ${(props) => props.theme.shadow};
    }
    /*PROFILE PAGE CSS*/
    .socialMedia {
        box-shadow: ${(props) => props.theme.shadow};
      }
      .socialMedia input {
        border: 1px solid ${(props) => props.theme.primaryColor};
      }
      .socialMedia button {
        border: 1px solid ${(props) => props.theme.primaryColor};
      }
      
      .thumbs {
        border: 1px solid ${(props) => props.theme.primaryColor};
      }
      
      .card {
        box-shadow: ${(props) => props.theme.shadow};
        background-color: ${(props) => props.theme.primaryColor};
      }
      
      .card .front {
        color: ${(props) => props.theme.secondaryColor};
        background-color: ${(props) => props.theme.primaryColor};
      }
      
      .card .back {
        color: ${(props) => props.theme.secondaryColor};
        background-color: ${(props) => props.theme.primaryColor};
      }
      /*MAIN PAGE CSS*/
      .arrow-down::before {
        
        background: ${(props) => props.theme.primaryColor};
      }
      .arrow-down:hover {
        background: ${(props) => props.theme.secondaryColor};
      }
      .frens-list {
        background: ${(props) => props.theme.primaryColor};
      }
      hr {
        border-color: ${(props) => props.theme.primaryColor};
      }

      /* CHAT FUNCTIONALITY */
      .scrollMessages {
        background-color: ${(props) => props.theme.chatColor};
      }

      .message-box {
        background-color: ${(props) => props.theme.chatBoxColor};
      }

      .message-text {
        color: ${(props) => props.theme.chatTextColor};
      }

      .message-text-current {
        color: ${(props) => props.theme.chatTextColor};
      }

      .input-container {
        background-color: ${(props) => props.theme.chatColor};
        color: ${(props) => props.theme.chatTextColor};
      }
`;
