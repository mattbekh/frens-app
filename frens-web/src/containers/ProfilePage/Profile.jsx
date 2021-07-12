import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import CardList from "./CardList";
import SocialMedia from "./SocialMedia";

const Container = styled.div`
    margin: 1rem 2rem;
`;

function Profile() {
    let theme = "light";
    // Check redux isDark state
    const isDark = useSelector((state) => state.isDark);
    if (isDark) {
        theme = "dark";
    } else {
        theme = "light";
    }

    const [cardlist, setCardlist] = useState(SAMPLE_CARDS);
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Container>
                {/*<HeaderWrapper>
          <Header />
        </HeaderWrapper>*/}

                <DesktopNav />
                <MobileNav />

                {/* 
                        Some style formatting issues here with display I think
                        Which is why Footer is not pinned to the bottom.
                    */}

                {/* <ContentWrapper> */}
                <SocialMedia />
                <CardList cardlist={cardlist} />
                {/* </ContentWrapper> */}

                {/* <FooterWrapper>
                    <Footer />
                </FooterWrapper> */}
            </Container>
        </ThemeProvider>
    );
}

const SAMPLE_CARDS = [
    {
        id: 1,
        question: "what is your favourite anime?",
        options: ["Attck on Titan", "Demon Slayer", "Tokoyo Ghoul", "Naruto", "Jujutsu Kaisen"],
    },
    {
        id: 2,
        question: "what is your favourite animal?",
        options: ["Cat", "Dog", "I hate Animal :("],
    },
    {
        id: 3,
        question: "what is your math level?",
        options: ["Expert", "Average", "I am stupid, but I do not hate math", "Hater"],
    },
    {
        id: 4,
        question: "where do you go to school?",
        options: ["UBC", "SFU", "BCIT", "Langara", "Other"],
    },
    {
        id: 5,
        question: "what is your preferrd food?",
        options: ["Sushi", "Hotpot", "Salad", "Piazza", "Pho"],
    },
    {
        id: 6,
        question: "What year level are you in right now?",
        options: ["High School", "Year 1", "Year 2", "Year 3", "Year 4", "Graduated"],
    },
    {
        id: 7,
        question: "what is your Faulty?",
        options: ["Art", "Science", "Engineering", "Business", "Undeclared"],
    },
    {
        id: 8,
        question: "Are you funny?",
        options: ["Of course!!", "Nope", "I hate Jokes"],
    },
];
export default Profile;