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

// CSS Styling here

// const HeaderWrapper = styled.header`
//     width: 100%:
//     padding: 0;
//     margin: 0;
//     display: flex;
//     flex-direction: row;
//     align-items: left;
//     order: 1;
// `
// const MiddleSectionWrapper = styled.div`
//     width: 100%;
//     height: 100%;
//     margin: 0 auto;
//     order: 2;
// `

// const FooterWrapper = styled.footer`
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     order: 3;
//     padding: 1rem;
// `

export function SigninPage(props) {

    // const [theme, setTheme] = useState("light");
    let theme = "light";
    // Check redux isDark state
    const isDark = useSelector(state => state.isDark);
    if(isDark) {
        // setTheme("dark");
        theme = "dark";
    } else {
        theme = "light";
    }

    let middleSection = useRef(null);
    let head = useRef(null);
    let tl = new gsap.timeline;

    let data = useLocation();
    console.log(data.state.theme);

    useEffect( () => {

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
                {/* <MiddleSectionWrapper ref={el => middleSection = el} >
                    <MiddleSection />
                </MiddleSectionWrapper> */}

                <FooterWrapper>
                    <Footer/>
                </FooterWrapper>

            </PageContainer>
        </ThemeProvider>
    );
}
