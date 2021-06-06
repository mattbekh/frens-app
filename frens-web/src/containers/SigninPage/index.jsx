import React, { useRef, useEffect } from "react";
import {useSelector} from "react-redux";
import styled, {ThemeProvider} from "styled-components/macro";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes.js";
import gsap, { Power3 } from "gsap";
import {useLocation} from "react-router-dom";

import { PageContainer } from "../../components/PageContainer";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { ContentWrapper } from "../../components/ContentWrapper";
import { FooterWrapper } from "../../components/FooterWrapper";

import MiddleSection from "./MiddleSection";
import SlipIn from "../../components/SlipIn";
import Footer from "../../components/Footer";


const Container = styled.div`
    visibility: hidden;
    // display: flex;
    // // flex-direction: row;
    // // justify-content: center;
    // // flex-wrap: wrap;
    // text-align: center;
    // margin: auto;
    // min-height: 100%;
    // width: 100%;
`


export function SigninPage(props) {
    
    let theme = "light";
    // Check redux isDark state
    const isDark = useSelector(state => state.isDark);
    if(isDark) {

        theme = "dark";
    } else {
        theme = "light";
    }

    let content = useRef(null);
    let middleSection = useRef(null);
    let head = useRef(null);
    let tl = new gsap.timeline;

    let data = useLocation();
    console.log(data.state.theme);

    useEffect( () => {
        // Wait for page to load, prevent glitches
        gsap.to(content, 0, {css: {visibility: 'visible'}})

        tl.from(head, 1, {x:-1000, ease: Power3.easeOut})
          .from(middleSection, 1.2, {y: -1080, ease: Power3.easeOut},0.2);
        // tl.from(loginRef, 2, {y: 1280, ease: Power3.easeOut})
        //   .from(loginRef,2,{scale: 0, ease: Power3.easeOut}, .2)
        //   .from(registerRef, 1.2, {y: -1080, ease: Power3.easeOut}, 0.9)
        //   .from(registerRef,2,{scale: 0, ease: Power3.easeOut});

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
