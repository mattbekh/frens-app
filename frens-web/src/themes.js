import {createGlobalStyle} from "styled-components";

export const darkTheme = {
    secondaryColor: "#010101",
    primaryColor: "#FFBE0B",
    accentColor: "#FB5607",
    highlightColor: "#000000",
    shadow: "0px 0px 1rem rgba(255, 230, 0, 0.8)",
};

export const lightTheme = {
    secondaryColor: "#FFBE0B",
    primaryColor: "#010101",
    accentColor: "#FB5607",
    highlightColor: "#ffffff",
    shadow: "0px 0px 1rem rgba(0,0,0,0.8)",
};

//global styles for theme switching
export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${props => props.theme.secondaryColor};
        color: ${props => props.theme.primaryColor};
        border-color: ${props => props.theme.primaryColor};
    }

    input {
        border-radius: 5px;
        height: 2.3rem;
        border: 1px solid grey;
    }

    a {
        text-decoration: none;
        font-weight: bold;
        color: ${props => props.theme.accentColor};
    } 

    button {
        color: ${props => props.theme.primaryColor};
    }


    /*welcome page css*/
    .emptyContainer {
        background-color: none;
        border: solid 3px ${props => props.theme.primaryColor};

    }

    .fullContainer {
        background-color: ${props => props.theme.primaryColor};
    }

    .fullContainer-text {
        color: ${props => props.theme.secondaryColor};
    }

    .toggleWrapper {
        border-color: ${props => props.theme.primaryColor};
    }

    .text-content-line {
        color: ${props => props.theme.primaryColor};
    }


    /*signin page css*/
    .login-button {
        color: ${props => props.theme.highlightColor};
        background-color: ${props => props.theme.primaryColor};
        border: none;
    }

    .login-form {
        border: 1px solid ${props => props.theme.primaryColor};
        box-shadow: ${props => props.theme.shadow};
    }
`