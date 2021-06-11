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

import friends from "../../images/friends.jpg";
import logo from "../../images/Frens-2.png";
import Header from "../../components/Header";

const Container = styled.div`
    visibility: hidden;
`
const LogoWrapper = styled.img`
    width: 180px;
    height: 100px;
    margin-top: 0;
    position: relative;
    object-fit: cover;
`

const Nav = styled.nav`
    width: 100%;
    height: 5rem;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: space-around;
    z-index: 1;
    background: none;
    position: absolute;
    top: 0;
    border-bottom: none;

`

const ImageWrapper = styled.div`
    width: 100%;
    height: 80vh;
    background: url(${friends});
    background-position: top calc(200px - 29.5vw) right;
    background-size: cover;
    box-shadow: 0px 10rem 10rem rgba(0,0,0,0.8) inset, 0px 0px 1rem rgba(0,0,0,0.8);
    z-index: 0;
`

function ImageContent(props) {
    let content = useRef(null);
    let head = useRef(null);
    let image = useRef(null);
    let tl = new gsap.timeline;

    useEffect( () => {
        // Content remains hidden until everything is ready to be rendered
        gsap.to(content, 0, {css: {visibility: 'visible'}});

        tl.set(image, { height: '70vh' }, 'start')
        .from(image, 2, { height: 0, ease: Power3.easeOut }, 'start+=0.001')
        .set(head, { opacity: "100%"})
        .from(head, 2, { opacity: 0, ease: Power3.easeOut }, 0.4);
    })

    return (
        <Container ref={el => content = el}>
            <div ref={el => head = el}>
                <Nav>
                    <LogoWrapper  src={logo} alt="logo" className="logo-img"/>
                </Nav>
            {/* <Header/> */}
            </div>
            <ImageWrapper ref={el => image = el}/>
        </Container>
    );
}

export default ImageContent;