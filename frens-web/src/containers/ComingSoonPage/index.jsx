// Main Entry point for the website
import React from "react";
import {useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components/macro";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes.js";
import { PageContainer } from "../../components/PageContainer";

const DisclaimerContainer = styled.div`
    display: absolute;
    height: 90vh;
    text-align: center;
    font-size: xx-large;
    
    & > h1 {
        padding: 18rem 0;
    }
`;

const ButtonWrapper = styled.button`
  font-weight: 900;
  width: 80px;
  border-radius: 5px;
  height: 2.8rem;
  margin: 0 2.8rem;

  &:hover {
    filter: brightness(1.5);
    transition: 0.5s;
  }
`;

export function ComingSoonPage(props) {
    let history = useHistory();

    const isDark = useSelector(state => state.isDark);
    let theme = "light";
    if(isDark) {
        theme = "dark";
    } else {
        theme = "light";
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <PageContainer>
                <DisclaimerContainer>
                    <h1>COMING SOON!</h1>
                </DisclaimerContainer>
                    <ButtonWrapper onClick={()=>{history.goBack()}}>
                            BACK
                    </ButtonWrapper>
            </PageContainer>
        </ThemeProvider>
    );
}

