import React, { useContext, useState } from "react";
import ReactSelect from "react-select";
import {
  SubmitButton,
  Input,
  FormContainer,
  BoxContainer,
  Label,
  MutedLink,
  BoldLink,
  NormalButton,
} from "./CommonElement";
import { RegisterContext } from "./RegisterContext";
import styled from "styled-components/macro";
import axios from "axios";
import { useHistory } from "react-router-dom";

const InterestBox = styled.div`
  height: 4rem;
  width: 20rem;
  min-width: 28rem;
  border: solid black;
  border-width: 5 5px;
  position: relative;
  overflow: hidden;
  background: none;
`;

const CustomSelect = styled(ReactSelect)`
  & .Select__placeholder {
    color: #3a86ff;
  }

  & .Select__menu {
  }
  width: 500px;
`;

const MorInfo = ({ user }) => {
  const { switchToSignup } = useContext(RegisterContext);
  const [username, setUserName] = useState();
  const [userNameErr, setUserNameErr] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    { label: "cooking", value: "cooking" },
    { label: "music", value: "music" },
    { label: "drawing", value: "drawing" },
    { label: "workout", value: "workout" },
  ];
  let history = useHistory();

  //fetch
  const onSubmit = async (event) => {
    event.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      user.userName = username;
      setInterest(selectedOptions);
      const response = await axios.post("/register", user);
      localStorage.setItem("profile", JSON.stringify({ ...response.data }));
      history.push("/main");
    }
  };

  const setInterest = (interests) => {
    for (let interest of interests) {
      if (interest.value === "cooking") {
        user.interests.cooking = 1;
      }
      if (interest.value === "music") {
        user.interests.music = 1;
      }
      if (interest.value === "drawing") {
        user.interests.drawing = 1;
      }
      if (interest.value === "workout") {
        user.interests.workout = 1;
      }
    }
  };

  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  const formValidation = () => {
    const usernameErr = {};
    let isValid = true;
    if (!username) {
      usernameErr.userNameEmpty = "userName can't be empty";
      isValid = false;
    }
    setUserNameErr(usernameErr);
    return isValid;
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={onSubmit}>
        <Label>User Name</Label>
        <Input
          type="text"
          placeholder="user name"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        {Object.keys(userNameErr).map((key) => {
          return <div style={{ color: "white" }}> {userNameErr[key]} </div>;
        })}
        <p> Pick your Interest</p>
        <CustomSelect
          classNamePrefix={"Select"}
          isMulti
          options={options}
          closeMenuOnSelect={false}
          onChange={handleChange}
          menuPortalTarget={document.body}
          menuPosition={"fixed"}
        />
        <SubmitButton> I am ready! </SubmitButton>
      </FormContainer>
      <NormalButton onClick={switchToSignup}> Back </NormalButton>
      <MutedLink>
        Already have an account?
        <BoldLink to={{ pathname: "/signin", state: { theme: `poo` } }}>
          Sign in!
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default MorInfo;
export { InterestBox };
