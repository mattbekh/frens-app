import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Modal from "./Modal";
import FrensList from "./FrensList";
// import initialFrensList from "./database.json";
import initialFrensList from "./db.js";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes";
import arrowDown from "../../images/arrow-down.png";


import { PageContainer } from "../../components/PageContainer";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { ContentWrapper } from "../../components/ContentWrapper";
import { FooterWrapper } from "../../components/FooterWrapper";

// import Header from "../../components/Header";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import Footer from "../../components/Footer";

const MainContainer = styled.div`
  margin-top: -3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  .user-account-info {
    width: 80%;
    margin: 0 auto;
    h1 {
      font-family: "Gill Sans", sans-serif;
      font-size: 48px;
      background: -webkit-linear-gradient(0deg, #5f978b, rgb(409, 82, 82));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    hr {
      border: none;
      padding-bottom: 2px;
      background-image: -webkit-linear-gradient(
        0deg,
        #5f978b,
        rgb(409, 82, 82)
      );
    }
  }
  .arrow-down {
    display: block;
    width: 60px;
    height: 60px;
    padding: 12px;
    border-radius: 50%;
    margin: 0 auto;
    transition: 0.3s;
  }
  .arrow-down img {
    width: 100%;
    height: 100%;
  }
  .arrow-down:hover {
    transform: scale(1.1);
  }
  .arrow-down:hover img {
    filter: brightness(1) invert(1);
  }
`;

const ParallaxContainer = styled.section`
  /* page break */
  background-image: url("/static/media/friends.310b1ff3.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .page-intermission {
    max-width: 680px;
    min-height: 60vh;
    margin: auto;
    display: flex;
    align-items: center;
  }
  .page-intermission h2 {
    font-size: 48px;
    text-align: center;
    color: white;
    background: rgba(221, 221, 221, 0.3);
    padding: 4rem 2rem;
  }
`;

const RandomContent = styled.section`
  /* random content */
  padding: 4rem 0 4rem;
  color: white;
  /*background: #1a191e;*/
  min-height: 100px;
  .random-content-wrapper {
    text-align: center;
    max-width: 680px;
    margin: auto;
  }
  .random-content-wrapper hr {
    margin-bottom: 3rem;
  }
`;

function Main() {
  // Check redux isDark state
  const isDark = useSelector((state) => state.isDark);

  const [frensList, setFrensList] = useState([]);

  const [modal, setModal] = useState({
    visible: false,
    name: "",
    imgURL: "",
    contactInfo: "",
  });

  useEffect(() => {
    setFrensList(initialFrensList); //set frensList with initialFrensList
  }, []); // on first refresh

  // card click handler
  function openModal(name, imgURL, contactInfo) {
    let newModal = { ...modal };
    newModal.visible = true;
    newModal.name = name;
    newModal.imgURL = imgURL;
    newModal.contactInfo = contactInfo;
    setModal(newModal);
  }

  function closeModal() {
    let newModal = { ...modal };
    newModal.visible = false;
    setModal(newModal);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <PageContainer>
        <div className="max-container">
          <DesktopNav />
          <MobileNav />

          <MainContainer className="full-hight">
            <div className="user-account-info">
              <h1>Hi, Monica! How you doin'~?</h1>
              <hr />
            </div>
            <h2>Time to find your people!</h2>
            <p>Here are frens who share similiar interest with you!</p>
            <a className="arrow-down" href="#frenslist">
              <img src={arrowDown} />
            </a>
          </MainContainer>
          <FrensList frensList={frensList} openModal={openModal} />
          <Modal modal={modal} setModal={setModal} closeModal={closeModal} />

          <ParallaxContainer class="parallax">
            <div class="page-intermission">
              <h2>Come back tomorrow and get some new matches!</h2>
            </div>
          </ParallaxContainer>

          <RandomContent class="random-content">
            <div class="random-content-wrapper">
              <h2>Want More Precise Matches?</h2>
              <p>Go to the Profile Page to complete your information !</p>
              <hr />
            </div>
          </RandomContent>
        </div>
      </PageContainer>
    </ThemeProvider>
  );

}

export default Main;