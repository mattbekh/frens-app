import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoginUser,
  updateQuestions,
  updateLoginUserSocial,
} from "../../redux/actions";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../../themes";
import { PageContainer } from "../../components/PageContainer";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import CardList from "./CardList";
import SocialMedia from "./SocialMedia";

const Container = styled.div`
  margin: 1rem 2rem;
`;

function Profile() {
  let theme = "light";
  // Check redux isDark state

  const loginUser = useSelector((state) => state.loginUser);
  const questions = useSelector((state) => state.questionsProfile);

  const isDark = useSelector((state) => state.isDark);
  const dispatch = useDispatch();

  const [cardlist, setCardlist] = useState([]);

  if (isDark) {
    theme = "dark";
  } else {
    theme = "light";
  }

  useEffect(() => {
    axios.get("/questions").then((response) => {
      setCardlist(response.data);
    });

    const token = JSON.parse(localStorage.getItem("profile")).token;

    axios.get("/loginUser/" + token).then((response) => {
      dispatch(setLoginUser(response.data));
      dispatch(updateLoginUserSocial(response.data.social));
      dispatch(updateQuestions(response.data.questions));
    });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <PageContainer>
        <DesktopNav />
        <MobileNav />
        <Container>
          
          <SocialMedia loginUser={loginUser} />
          <CardList cardlist={cardlist} questions={questions} />
        </Container>
      </PageContainer>
    </ThemeProvider>
  );
}

export default Profile;
