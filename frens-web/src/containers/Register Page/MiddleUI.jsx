import styled from "styled-components/macro";
import { Link } from "react-router-dom";
// CSS for this section
import React from 'react';
import RegisterForm from "./RegisterForm";
import {motion} from "framer-motion";
import { useState } from 'react';
import {ReactReduxContext} from "react-redux";
import {RegisterContext} from "./RegisterContext";
import MoreInfo from "./MoreInfo";




// the drop down effect is inspired by Islem Maboud https://github.com/ipenywis
const BoxContainer = styled.div`
  // width: 500px;
  // min-height: 600px;
  height: 40rem;
  width: 34rem;
  min-width: 28rem;
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  //border-radius: 19px;
  // background-color: #FFF3ED;
  // box-shadow: 10px 8px 2px #FB5607;
  position: relative;
  overflow: hidden;
  background: none;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 60%;
  top:-350px;
  left: -100px;
  // background: rgb(251,86,7);
  background: linear-gradient(90deg, rgba(251,86,7,1) 35%, rgba(249,250,7,1) 100%);
  z-index: 5;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 50px;
  font-weight: 600;
  line-height: 1.24;
  color: #010101;
  z-index: 10;
  margin-bottom: 0;
  margin-left: 300px;
  background: none;
`;

const SmallTittle = styled.h3`
  color: #010101;
  font-weight: 400;
  font-size: 20px;
  margin-top: 4px;
  margin-bottom: 115px;
  margin-left: 300px;
  z-index: 10;
  background: none;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  margin-top: 0;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
    },
};


const MiddleUI = () => {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signUp");

    const playExpand = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, 600);
    };


    const switchToSignup = () => {
        playExpand();
        setActive("signUp")
    };

    const switchToInFo = () => {
        playExpand();
        setActive("pfo");
    };

    const contextValue = { switchToInFo, switchToSignup};

    return (
        <RegisterContext.Provider value={contextValue}>
        <BoxContainer className="login-form">
            <TopContainer>
                <BackDrop initial = {false} animate = {isExpanded ? "expanded" : "collapsed"} variants={backdropVariants}/>
                {active == "signUp" && (
                <HeaderContainer>
                    <HeaderText>
                        Register
                    </HeaderText>
                    <SmallTittle>It's nice to meet you!</SmallTittle>
                </HeaderContainer>
                )}
                {active == "pfo" && (
                    <HeaderContainer>
                        <HeaderText>
                            More Info
                        </HeaderText>
                        <SmallTittle>Tell us more about you!</SmallTittle>
                    </HeaderContainer>
                )}
            </TopContainer>
            <InnerContainer>
                { active == "signUp" && <RegisterForm/> }
                { active == "pfo" && <MoreInfo/>}
            </InnerContainer>
        </BoxContainer>
        </RegisterContext.Provider>
    );
};

export default MiddleUI;
