import React, { useRef, useEffect, useState } from "react";
import gsap, { Power3 } from "gsap";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

// CSS STYLING
import '../../App.css';
const Container = styled.div`
    visibility: hidden;
    display: flex;
    // flex-direction: row;
    // justify-content: center;
    // flex-wrap: wrap;
    text-align: center;
    margin: auto;
    min-height: 100%;
    width: 100%;
`
const SectionWrapper = styled.section`
    // visibility: visible;
    position: absolute;
    left: 46%;
    margin: 0;
    // min-height: 100%;
    // text-align: center;
    overflow: hidden;

    @media screen and (max-width: 600px) {
        left: 38%;
    }
`
const ButtonWrapper = styled.div`
    margin: 0 auto;
    display: inline-flex;
    flex-direction: row;
    min-height: 100%;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`
const LoginWrapper = styled.div`
    border-radius: 10px;
    width: 16rem;
    height: 8rem;
    margin: 0 1rem 0 0;
    display: flex;
    box-shadow: 0px 0px 1rem rgba(0,0,0,0.5);
    &:hover {
        width: 14rem;
        height: 7rem;
        transition: 1s;
    }

    @media screen and (max-width: 600px) {
        margin: 1rem 0 0 0;
    }
`

const RegisterWrapper = styled.div`
    border-radius: 10px;
    width: 16rem;
    height: 8rem;
    margin: 0 0 0 1rem;
    align-self: center;
    // position: absolute;
    display: flex;
    // right: 50%;
    // bottom: 50%;
    box-shadow: 0px 0px 1rem rgba(0,0,0,0.5);
    &:hover {
        width: 14rem;
        height: 7rem;
        transition: 1s;
    }
    @media screen and (max-width: 600px) {
        margin: 1rem 0 0 0;
    }
`

const LoginButton = styled.button`
    border: none;
    font-weight: bold;
    font-size: 1.8rem;
    background: none;
    margin: auto;
`

const RegisterButton = styled.button`
    background: none;
    font-weight: bold;
    font-size: 1.2rem;
    border: none;
    margin: auto;
`

function TextContent(props) {

    let content = useRef(null);
    let loginRef = useRef(null);
    let registerRef = useRef(null);
    let textContent = useRef(null);

    let tl = new gsap.timeline;

    useEffect( () => {
        // Content remains hidden until everything is ready to be rendered
        gsap.to(content, 0, {css: {visibility: 'visible'}})
        
        const headlineFirst = textContent.children[0].children[0];
        const headlineSecond = textContent.children[0].children[1];
        const headlineThird = textContent.children[0].children[2];

        // Stagger in the catch phrase 
        gsap.to(textContent,0,{css: {visibility: 'visible'}})
        tl.staggerFrom([headlineFirst, headlineSecond, headlineThird], 2, {y: 250, ease: Power3.easeOut},0.15)
          .staggerTo([headlineFirst, headlineSecond, headlineThird], 1, {y: 250, ease: Power3.easeOut})
          .to(textContent,0,{css: {visibility: 'hidden'}});

        tl.staggerTo([headlineFirst, headlineSecond, headlineThird], 0, {y: 0, ease: Power3.easeOut});
       
        // tl.staggerFrom(textContent, 2, {y: 250, ease: Power3.easeOut})
        //   .staggerTo(textContent, 1, {y: 250, ease: Power3.easeOut});

        // Ease in the Sign In and Register Bubbles
        tl.from(loginRef,2,{scale: 0, ease: Power3.easeOut}, 2.5)
          .from(registerRef,2,{scale: 0, ease: Power3.easeOut},3.1);
        
    })


        // const headlineFirst = textContent.children[0].children[0];
        // const headlineSecond = textContent.children[0].children[1];
        // const headlineThird = textContent.children[0].children[2];
        
        // tl.staggerFrom([headlineFirst, headlineSecond, headlineThird], 2, {y: 250, ease: Power3.easeOut})
        //   .staggerTo([headlineFirst, headlineSecond, headlineThird], 1, {y: 250, ease: Power3.easeOut});

        // tl.from(loginRef, 2, {y: 1280, ease: Power3.easeOut})
        //   .from(loginRef,2,{scale: 0, ease: Power3.easeOut}, .2)
        //   .from(registerRef, 1.2, {y: -1080, ease: Power3.easeOut}, 0.9)
        //   .from(registerRef,2,{scale: 0, ease: Power3.easeOut});


    return (

            <Container ref={el => content = el} >
                <SectionWrapper ref={el => textContent = el}>
                    {/*replace after animation*/}
                    <h2>
                        <div className="text-content-line">Make friends</div>
                        <div className="text-content-line">which last</div>
                        <div className="text-content-line">forever.</div>
                    </h2>
                </SectionWrapper>
                <ButtonWrapper>

                <Link to={{ pathname: '/signin', state: { theme: `poo`} }}>
                    <LoginWrapper ref={el => loginRef = el} className="emptyContainer">
                        <LoginButton className="emptyContainer-text">Sign In</LoginButton>
                    </LoginWrapper>
                </Link>
                
                <Link to={{ pathname: '/register'}}>
                    <RegisterWrapper ref={el => registerRef = el} className="fullContainer">
                        <RegisterButton className="fullContainer-text">Register</RegisterButton>
                    </RegisterWrapper>
                </Link>
                </ButtonWrapper>

            </Container>
    );
}

export default TextContent;