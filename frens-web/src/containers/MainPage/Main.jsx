import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Modal from "./Modal";
import FrensList from "./FrensList";
import initialFrensList from "./database.json";

import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes";

import { PageContainer } from "../../components/PageContainer";
import { HeaderWrapper } from "../../components/HeaderWrapper";
import { ContentWrapper } from "../../components/ContentWrapper";
import { FooterWrapper } from "../../components/FooterWrapper";

// import Header from "../../components/Header";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import Footer from "../../components/Footer";

const MainInfoContainer = styled.div`
    border-bottom: 2px solid var(--black);
    width: 80%;
    margin: 0 auto;
`;

function Main() {
    let theme = "light";
    // Check redux isDark state
    const isDark = useSelector((state) => state.isDark);
    if (isDark) {
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
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <PageContainer>
                <div className="max-container">
                    {/*<HeaderWrapper>
                        <Header />
                    </HeaderWrapper>*/}

                    <DesktopNav />
                    <MobileNav />

                    {/* 
                        Some style formatting issues here with grid display I think
                        Which is why Footer is not pinned to the bottom.
                        */}

                    {/* <ContentWrapper> */}
                    <MainInfoContainer className="user-account-info">
                        <h1>Hi, Monica! How you doin'~?</h1>
                    </MainInfoContainer>
                    <h1>Time to find your people!</h1>
                    <p>Here are frens who share similiar interest with you!</p>

                    <FrensList frensList={frensList} openModal={openModal} />
                    <Modal modal={modal} setModal={setModal} closeModal={closeModal} />
                    <h1>Come back tomorrow and get some new matches!</h1>
                    {/* </ContentWrapper> */}

                    {/* <FooterWrapper>
                        <Footer />
                    </FooterWrapper> */}
                </div>
            </PageContainer>
        </ThemeProvider>
    );
}

export default Main;
