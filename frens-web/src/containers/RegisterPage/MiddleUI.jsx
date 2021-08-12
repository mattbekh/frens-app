import styled from "styled-components/macro";
import React, {useState} from "react";
import { motion } from "framer-motion";

import RegisterForm from "./RegisterForm";
import { RegisterContext } from "./RegisterContext";
import MoreInfo from "./MoreInfo";

/* the drop down effect is inspired by Islem Maboud https://github.com/ipenywis */

const BoxContainer = styled.div`
  height: 40rem;
  width: 34rem;
  min-width: 28rem;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
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
  top: -350px;
  left: -100px;
  z-index: 5;

  background: linear-gradient(
    90deg,
    rgba(251, 86, 7, 1) 35%,
    rgba(249, 250, 7, 1) 100%
  );
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

const newUser = {
  email: undefined,
  password: undefined,
  interests: {
    cooking: 0,
    music: 0,
    drawing: 0,
    workout: 0,
  },
  userName: undefined
}

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
    setActive("signUp");
  };

  const switchToInFo = () => {
    playExpand();
    setActive("pfo");
  };

  const contextValue = { switchToInFo, switchToSignup };

  return (
    <RegisterContext.Provider value={contextValue}>
      <BoxContainer className="login-form">
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
          />
          {active === "signUp" && (
            <HeaderContainer>
              <HeaderText>Register</HeaderText>
              <SmallTittle>It's nice to meet you!</SmallTittle>
            </HeaderContainer>
          )}
          {active === "pfo" && (
            <HeaderContainer>
              <HeaderText>More Info</HeaderText>
              <SmallTittle>Tell us more about you!</SmallTittle>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signUp" && <RegisterForm user = {newUser}/>}
          {active === "pfo" && <MoreInfo user= {newUser}/>}
        </InnerContainer>
      </BoxContainer>
    </RegisterContext.Provider>
  );
};

export default MiddleUI;
