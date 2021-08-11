import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import gsap, { Power3 } from "gsap";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes.js";

import { PageContainer } from "../../components/PageContainer";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { ContentWrapper } from "../../components/ContentWrapper";
import { FooterWrapper } from "../../components/FooterWrapper";

import MiddleUI from "./MiddleUI";
import SlipIn from "../../components/SlipIn";
import Footer from "../../components/Footer";

const RegisterContainer = styled.div`
    visibility: hidden;
    //   width: 100%;
    //   height: 100vh;
    padding: 0;
    margin: 0;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    //   background-color: var(--black);
`;

const RegisterPage = () => {
    let theme = "light";
    // Check redux isDark state
    const isDark = useSelector((state) => state.isDark);
    if (isDark) {
        theme = "dark";
    } else {
        theme = "light";
    }

    let content = useRef(null);
    let middleSection = useRef(null);
    let head = useRef(null);
    let tl = new gsap.timeline();

    useEffect(() => {
        // Wait for page to load, prevent glitches
        gsap.to(content, 0, { css: { visibility: "visible" } });

        tl.from(head, 1, { x: -1000, ease: Power3.easeOut }).from(middleSection, 1.2, { y: -1080, ease: Power3.easeOut }, 0.2);
    });

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <RegisterContainer ref={(el) => (content = el)}>
                <PageContainer>
                    <HeaderWrapper>
                        <div ref={(el) => (head = el)}>
                            <SlipIn name="Register" />
                        </div>
                        {/* <ToggleNM/> */}
                    </HeaderWrapper>

                    <ContentWrapper>
                        <div ref={(el) => (middleSection = el)}>
                            <MiddleUI />
                        </div>
                    </ContentWrapper>

                    <FooterWrapper>
                        <Footer />
                    </FooterWrapper>
                </PageContainer>
            </RegisterContainer>
        </ThemeProvider>
    );
};

export default RegisterPage;
