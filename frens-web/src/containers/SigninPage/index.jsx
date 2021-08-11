import React, { useRef, useEffect } from "react";
import {useSelector} from "react-redux";
import styled, {ThemeProvider} from "styled-components/macro";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes.js";
import gsap, { Power3 } from "gsap";

import { PageContainer } from "../../components/PageContainer";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { ContentWrapper } from "../../components/ContentWrapper";
import { FooterWrapper } from "../../components/FooterWrapper";
import MiddleSection from "./MiddleSection";
import SlipIn from "../../components/SlipIn";
import Footer from "../../components/Footer";

const Container = styled.div`
    visibility: hidden;
`

export function SigninPage(props) {
    let theme = "light";
    const isDark = useSelector(state => state.isDark);
    if(isDark) {
        theme = "dark";
    } else {
        theme = "light";
    }

    let content = useRef(null);
    let middleSection = useRef(null);
    let head = useRef(null);
    let tl = new gsap.timeline();

    useEffect( () => {
        gsap.to(content, 0, {css: {visibility: 'visible'}})
        tl.from(head, 1, {x:-1000, ease: Power3.easeOut})
          .from(middleSection, 1.2, {y: -1080, ease: Power3.easeOut},0.2);
    })

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Container ref={el => content = el}>
                <PageContainer>
                    <HeaderWrapper>
                        <div ref={el => head = el}>
                            <SlipIn name="Sign in"/>
                        </div>
                    </HeaderWrapper>
                    <ContentWrapper>
                        <div ref={el => middleSection = el} >
                            <MiddleSection />
                        </div>
                    </ContentWrapper>
                    <FooterWrapper>
                        <Footer/>
                    </FooterWrapper>
                </PageContainer>
            </Container>
        </ThemeProvider>
    );
}
