// Main Entry point for the website
import React from "react";
import {useSelector} from "react-redux";
import  {ThemeProvider} from "styled-components/macro";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes.js";

import { PageContainer } from "../../components/PageContainer";
import { ContentWrapper } from "../../components/ContentWrapper";
import { FooterWrapper } from "../../components/FooterWrapper";

import TextContent from "./TextContent";
import ToggleNM from "../../components/ToggleNM";

import ImageWrapper from "./ImageContent";


export function WelcomePage(props) {

    let theme = "light";
    // Check redux isDark state
    const isDark = useSelector(state => state.isDark);

    if(isDark) {
        theme = "dark";
    } else {
        theme = "light";
    }


    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <PageContainer>
                
                {/* <HeaderWrapper >
                    <div ref={el => head = el}>
                        <SlipIn name="Frens" theme={theme==="light" ? lightTheme : darkTheme}/>
                    </div>
                </HeaderWrapper> */}
                <ImageWrapper/>
                <ContentWrapper >
                    <TextContent theme={theme==="light" ? lightTheme : darkTheme}/>
                </ContentWrapper>

                <FooterWrapper>
                    <ToggleNM />
                </FooterWrapper>
            </PageContainer>
        </ThemeProvider>
    );
}

