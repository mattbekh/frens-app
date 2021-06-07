import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux";

import "../css/Main.css";
import Modal from "./Modal.js";
import FrensList from "./FrensList.js";
import initialFrensList from "../database.json";

import styled, {ThemeProvider} from  "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../themes";

import { PageContainer } from "./PageContainer";
import { HeaderWrapper } from "./HeaderWrapper";
import { ContentWrapper } from "./ContentWrapper";
import { FooterWrapper } from "./FooterWrapper";

import Header from "./Header";
import Footer from "./Footer";

function Main() {
    
    let theme = "light";
    // Check redux isDark state
    const isDark = useSelector(state => state.isDark);
    if(isDark) {

        theme = "dark";
    } else {
        theme = "light";
    }

    const [frensList, setFrensList] = useState([]);

    const [modal, setModal] = useState({ visible: false, name: "", imgURL: "", contactInfo: "" });

    useEffect(() => {
        setFrensList(initialFrensList); //set frensList with initialFrensList
    }, []); // on first refresh

    // card click handler
    function showModal(name, imgURL, contactInfo) {
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
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
                <PageContainer>
                    <div className="max-container">

                        <HeaderWrapper>
                            <Header />
                        </HeaderWrapper>

                        {/* 
                        Some style formatting issues here with grid display I think
                        Which is why Footer is not pinned to the bottom.
                        */}
                        
                        {/* <ContentWrapper> */}
                            <div className="user-account-info">
                                <h1>Hi, Monica! How you doin'~?</h1>
                            </div>
                            <h1>Time to find your people!</h1>
                            <p>Here are frens who share similiar interest with you!</p>

                            <FrensList frensList={frensList} showModal={showModal} />
                            <Modal modal={modal} closeModal={closeModal} />
                            <h1>Come back tomorrow and get some new matches!</h1>
                        {/* </ContentWrapper> */}
                        
                        
                        <FooterWrapper>
                            <Footer/>
                        </FooterWrapper>
                    </div>
                </PageContainer>


        </ThemeProvider>
    );
}

export default Main;
