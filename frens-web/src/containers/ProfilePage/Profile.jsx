import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes";
import axios from "axios";

// import Header from "../../components/Header";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import CardList from "./CardList";
import SocialMedia from "./SocialMedia";

const Container = styled.div`
  margin: 1rem 2rem;
`;

const api = axios.create({
  baseURL: `http://localhost:5000`,
});

function Profile() {
  let theme = "light";
  // Check redux isDark state
  const isDark = useSelector((state) => state.isDark);
  if (isDark) {
    theme = "dark";
  } else {
    theme = "light";
  }

  const [cardlist, setCardlist] = useState([]);

  useEffect(() => {
    axios.get("/questions").then((response) => {
      setCardlist(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <DesktopNav />
        <MobileNav />
        <SocialMedia />
        <CardList cardlist={cardlist} />
      </Container>
    </ThemeProvider>
  );
}

export default Profile;
