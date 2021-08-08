import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoginUser } from "../../actions";
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
  const loginUser = useSelector((state) => state.isLogged);
  const isDark = useSelector((state) => state.isDark);
  const dispatch = useDispatch();

  const [cardlist, setCardlist] = useState([]);
  const [social, setSocial] = useState([]);
  if (isDark) {
    theme = "dark";
  } else {
    theme = "light";
  }

  useEffect(() => {
    axios.get("/questions").then((response) => {
      setCardlist(response.data);
      console.log(response.data);
    });
    getLoginUserInfo();
  }, []);

  function getLoginUserInfo() {
    const getUserInfo = async () => {
      const token = JSON.parse(localStorage.getItem("profile")).token;

      const userInfo = {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      };
      const response = await axios.get("/posts", userInfo);

      if (response?.data) dispatch(setLoginUser(response.data));
    };
    getUserInfo();
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Container>
        <DesktopNav />
        <MobileNav />
        <SocialMedia social={loginUser} />
        <CardList cardlist={cardlist} />
      </Container>
    </ThemeProvider>
  );
}

export default Profile;
