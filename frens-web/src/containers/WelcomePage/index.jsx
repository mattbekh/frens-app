// Main Entry point for the website
import React, { useState, useRef, useEffect } from "react";
import {useSelector} from "react-redux";
import styled, {ThemeProvider} from "styled-components/macro";
import gsap, { Power3 } from "gsap";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes.js";

import { PageContainer } from "../../components/PageContainer";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { ContentWrapper } from "../../components/ContentWrapper";
import { FooterWrapper } from "../../components/FooterWrapper";

import TextContent from "./TextContent";
import SlipIn from "../../components/SlipIn";
import ToggleNM from "../../components/ToggleNM";

export function WelcomePage(props) {

    let theme = "light";
    // Check redux isDark state
    const isDark = useSelector(state => state.isDark);

    if(isDark) {
        theme = "dark";
    } else {
        theme = "light";
    }

    let head = useRef(null);
    let tl = new gsap.timeline;

    useEffect( () => {

        tl.from(head, 1, {x:-1000, ease: Power3.easeOut});
    })


    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <PageContainer>
                <HeaderWrapper >
                    <div ref={el => head = el}>
                        <SlipIn name="Frens" theme={theme==="light" ? lightTheme : darkTheme}/>
                        
                    </div>
                </HeaderWrapper>

                <ContentWrapper>
                    <TextContent theme={theme==="light" ? lightTheme : darkTheme}/>
                </ContentWrapper>

                <FooterWrapper>
                    <ToggleNM />
                </FooterWrapper>
            </PageContainer>
        </ThemeProvider>
    );
}

