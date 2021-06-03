import React, { useRef, useEffect } from "react";
import { PageContainer } from "../../components/PageContainer";
import MiddleSection from "./MiddleSection";
import TopSection from "./TopSection";
import styled from "styled-components/macro";
import gsap, { Power3 } from "gsap";

const MiddleSectionWrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
`

export function SigninPage(props) {

    let middleSection = useRef(null);
    let tl = new gsap.timeline;

    useEffect( () => {

        tl.from(middleSection, 1.2, {y: -1080, ease: Power3.easeOut});
        // tl.from(loginRef, 2, {y: 1280, ease: Power3.easeOut})
        //   .from(loginRef,2,{scale: 0, ease: Power3.easeOut}, .2)
        //   .from(registerRef, 1.2, {y: -1080, ease: Power3.easeOut}, 0.9)
        //   .from(registerRef,2,{scale: 0, ease: Power3.easeOut});

    })

    return <PageContainer>
        <MiddleSectionWrapper ref={el => middleSection = el} >
            <MiddleSection />
        </MiddleSectionWrapper>
        
    </PageContainer>;
}
