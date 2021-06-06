import styled from "styled-components/macro";
import { Link } from "react-router-dom";
// CSS for this section
import React from 'react';
import RegisterForm from "./RegisterForm";
import {motion} from "framer-motion";
import { useState } from 'react';



// the drop down effect is inspired by Islem Maboud https://github.com/ipenywis
const BoxContainer = styled.div`
  width: 500px;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  //border-radius: 19px;
  background-color: #FFF3ED;
  box-shadow: 10px 8px 2px #FB5607;
  position: relative;
  overflow: hidden;
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
  background: rgb(251,86,7);
  background: linear-gradient(90deg, rgba(251,86,7,1) 35%, rgba(249,250,7,1) 100%);
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
`;

const SmallTittle = styled.h3`
  color: #010101;
  font-weight: 400;
  font-size: 20px;
  margin-top: 4px;
  margin-bottom: 115px;
  margin-left: 300px;
  z-index: 10;
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

    const playExpand = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, 300);
    };

    return (
        <BoxContainer>
            <TopContainer>
                <BackDrop initial = {false} animate = {isExpanded ? "expanded" : "collapsed"} variants={backdropVariants}/>
                <HeaderContainer>
                    <HeaderText>
                        Register
                    </HeaderText>
                    <SmallTittle>It's nice to meet you!</SmallTittle>
                </HeaderContainer>
            </TopContainer>
            <InnerContainer>
                <RegisterForm/>
                <p onClick={playExpand}>hello</p>
            </InnerContainer>
        </BoxContainer>
    );
};

export default MiddleUI;