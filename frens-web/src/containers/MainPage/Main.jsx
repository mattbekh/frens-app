import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoginUser,
  updateQuestions,
  updateSocial,
  updateUserSocial,
} from "../../actions";
import { Link } from "react-router-dom";

import Modal from "./Modal";
import FrensList from "./FrensList";
import { BsChat } from "react-icons/all";
// import initialFrensList from "./database.json";

import initialFrensList from "./db.js";
import axios from "axios";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes";
import arrowDown from "../../images/arrow-down.png";

import { PageContainer } from "../../components/PageContainer";
// import { HeaderWrapper } from "../../components/HeaderWrapper";
// import { ContentWrapper } from "../../components/ContentWrapper";
// import { FooterWrapper } from "../../components/FooterWrapper";

// import Header from "../../components/Header";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import Footer from "../../components/Footer";
import Chat from "./Chat";

const MainContainer = styled.div`
  box-sizing: border-box;
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
    background: -webkit-linear-gradient(0deg, #5f978b, rgb(409, 82, 82));
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    padding: 12px;
    border-radius: 50%;
    margin: 0 auto;
    transition: 0.3s;
    position: relative;
  }
  .arrow-down::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    border-radius: 50%;
  }
  .arrow-down img {
    // padding: 25px;
    margin-top: 2px;
    width: 45px;
    height: 45px;
    filter: brightness(1) invert(1);
  }
  .arrow-down:hover {
    transform: scale(1.1);
  }
  .arrow-down:hover img {
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

const MainFooter = styled.footer`
  position: fixed;
  bottom: 0;
  //left: 0;
  width: 100%;
  height: 50px;
  background: #010101;
  color: white;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;

function Main() {
  // Check redux isDark state
  const isDark = useSelector((state) => state.isDark);

  const [frensList, setFrensList] = useState([]);
  const loginUser = useSelector((state) => state.loginUser);
  const social = useSelector((state) => state.socialProfile);
  const questions = useSelector((state) => state.questionsProfile);

  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    visible: false,
    name: "",
    imgURL: "",
    contactInfo: "",
  });

  useEffect(async () => {
    //get user authentication
    const token = JSON.parse(localStorage.getItem("profile")).token;
    const userInfo = {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.get("/posts", userInfo);
    if (response?.data) {
      dispatch(setLoginUser(response.data));
      console.log("[ @@@@@ RESPONSE @@@@ ]", response.data);
      if (response.data.questions)
        dispatch(updateQuestions(response.data.questions));
      // if (response.data.social) dispatch(updateSocial({response.data.social}));
    }

    //store the current logged in username
    let username = response.data.username;
    console.log("[ loginUser.username ]", username);

    //generate frens
    let sameClusterUsername = [];
    const pythonResponse = await axios.get("/python/");
    if (pythonResponse?.data) {
      console.log(
        "%c [ pythonResponse.data ]",
        "font-size:13px; background:pink; color:#bf2c9f;",
        pythonResponse.data
      );
      let loggedInUserCluster = pythonResponse.data[username];

      // let sameClusterUsername = [];

      //store frens that are in the same cluster as logged in user
      for (const [frenUsername, Cluster] of Object.entries(
        pythonResponse.data
      )) {
        if (Cluster === loggedInUserCluster && frenUsername !== username)
          sameClusterUsername.push(frenUsername);
      }
      console.log(
        "%c [ sameClusterUsername ]",
        "font-size:13px; background:pink; color:#bf2c9f;",
        sameClusterUsername
      );
    }

    //set/print cluster frens
    const frens = await axios.get("/suggest_list/" + sameClusterUsername);
    if (frens?.data) {
      setFrensList(frens.data);
      console.log(
        "%c [ frens.data ]",
        "font-size:13px; background:pink; color:#bf2c9f;",
        frens.data
      );
    }
    console.log("[ frens.data ]", frens.data);
  }, [dispatch]); // on first refresh

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
  function handleProfile() {
    console.log("[ social ]", social);
    console.log("[ questions ]", questions);
    console.log("[ login user ]", loginUser);
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <PageContainer>
        <DesktopNav />
        <MobileNav />
        <div className="max-container">
          <MainContainer className="full-hight">
            <div className="user-account-info">
              <h1>Hi, {loginUser.username}! How you doin'~?</h1>
              <hr />
            </div>
            <h2>Time to find your people!</h2>
            {/* <button onClick={() => handlePython()}> Python Test</button> */}
            <p>Here are frens who share similiar interest with you!</p>
            <a className="arrow-down" href="#frenslist">
              <img src={arrowDown} />
            </a>
          </MainContainer>
          <FrensList frensList={frensList} openModal={openModal} />
          <Modal modal={modal} setModal={setModal} closeModal={closeModal} />

          <ParallaxContainer className="parallax">
            <div className="page-intermission">
              <h2>Come back tomorrow and get some new matches!</h2>
            </div>
          </ParallaxContainer>

          <RandomContent className="random-content">
            <div className="random-content-wrapper">
              <h2>Want More Precise Matches?</h2>
              <p>
                Go to the <Link to="/profile">Profile Page</Link> to complete
                your information !
              </p>
              <hr />
            </div>
          </RandomContent>
        </div>
        <MainFooter>
          <Chat />
        </MainFooter>
      </PageContainer>
    </ThemeProvider>
  );
}

export default Main;
