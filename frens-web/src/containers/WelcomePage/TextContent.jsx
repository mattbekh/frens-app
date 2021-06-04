import React, { useRef, useEffect } from "react";
import gsap, { Power3 } from "gsap";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

// CSS STYLING
import '../../App.css';
const Container = styled.div`
    visibility: hidden;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    margin: auto;
    height: 100%;
    width: 100%;
`
const SectionWrapper = styled.section`
    margin: 18rem auto;
    height: 10rem;
    text-align: center;
    overflow: hidden;
`

const LoginWrapper = styled.div`
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    position: absolute;
    display: flex;
    top: 50%;
    left: 50%;
    box-shadow: 0px 0px 1rem rgba(0,0,0,0.5);
    &:hover {
        width: 12rem;
        height: 12rem;
        transition: 1s;
    }
`

const RegisterWrapper = styled.div`
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
    position: absolute;
    display: flex;
    right: 50%;
    bottom: 50%;
    box-shadow: 0px 0px 1rem rgba(0,0,0,0.5);
    &:hover {
        width: 12rem;
        height: 12rem;
        transition: 1s;
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
        gsap.to(content, 0, {css: {visibility: 'visible'}})
        
        const headlineFirst = textContent.children[0].children[0];
        const headlineSecond = textContent.children[0].children[1];
        const headlineThird = textContent.children[0].children[2];

        tl.staggerFrom([headlineFirst, headlineSecond, headlineThird], 2, {y: 250, ease: Power3.easeOut})
          .staggerTo([headlineFirst, headlineSecond, headlineThird], 1, {y: 250, ease: Power3.easeOut});

        tl.from(loginRef,2,{scale: 0, ease: Power3.easeOut}, 2.3)
          .from(registerRef,2,{scale: 0, ease: Power3.easeOut},2.9);

        // tl.from(loginRef, 2, {y: 1280, ease: Power3.easeOut})
        //   .from(loginRef,2,{scale: 0, ease: Power3.easeOut}, .2)
        //   .from(registerRef, 1.2, {y: -1080, ease: Power3.easeOut}, 0.9)
        //   .from(registerRef,2,{scale: 0, ease: Power3.easeOut});

    })

    return (

            <Container ref={el => content = el} >
                <Link to={{ pathname: '/signin', state: { theme: `poo`} }}>
                    <LoginWrapper ref={el => loginRef = el} className="emptyContainer">
                        <LoginButton>Sign In</LoginButton>
                    </LoginWrapper>
                    {/* <div ref={el => loginRef = el} className="emptyContainer">
                        <LoginButton>Sign In</LoginButton>
                    </div> */}
                </Link>
                
                <SectionWrapper ref={el => textContent = el}>
                    {/*replace after animation*/}
                    <h2>
                        <div className="text-content-line">Make friends</div>
                        <div className="text-content-line">which last</div>
                        <div className="text-content-line">forever.</div>
                    </h2>

                    
                </SectionWrapper>
                <RegisterWrapper ref={el => registerRef = el} className="fullContainer">
                    <RegisterButton className="fullContainer-text">Register</RegisterButton>
                </RegisterWrapper>
            </Container>
    );
}

export default TextContent;