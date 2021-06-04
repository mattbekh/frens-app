// Main Entry point for the website
import React, { useState, useRef, useEffect } from "react";
import {useSelector} from "react-redux";
import styled, {ThemeProvider} from "styled-components/macro";
import gsap, { Power3 } from "gsap";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes.js";

// import { PageContainer } from "../../components/PageContainer";
import TextContent from "./TextContent";
import SlipIn from "../../components/SlipIn";
import ToggleNM from "../../components/ToggleNM";

// CSS Styling here
import '../../App.css';

const PageWrapper = styled.body`
    margin: 0;
    display: flex;
    flex-direction: column;
`

const HeaderWrapper = styled.header`
    width: 100%:
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: left;
`

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    right: 0;
    order: 3;
    padding: 1rem;
`

export function WelcomePage(props) {

    // const [theme, setTheme] = useState("light");
    let theme = "light";
    // Check redux isDark state
    const isDark = useSelector(state => state.isDark);
    // console.log(isDark);

    if(isDark) {
        // setTheme("dark");
        theme = "dark";
    } else {
        theme = "light";
    }

    let head = useRef(null);
    let tl = new gsap.timeline;

    
    // const themeToggler = () => {
    //     theme === "light" ? setTheme("dark") : setTheme("light");
    // };


    useEffect( () => {

        tl.from(head, 1, {x:-1000, ease: Power3.easeOut});
    })


    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <PageWrapper>
                <HeaderWrapper ref={el => head = el}>
                    <SlipIn name="Frens" theme={theme==="light" ? lightTheme : darkTheme}/>
                </HeaderWrapper>

                <TextContent theme={theme==="light" ? lightTheme : darkTheme}/>
                <FooterWrapper>
                    <ToggleNM />
                </FooterWrapper>
            </PageWrapper>
        </ThemeProvider>
    );
}

