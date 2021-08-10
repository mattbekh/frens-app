import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  setLoginUser,
  updateQuestions,
  updateLoginUserSocial,
  insertQuestions,
} from "../../actions";

const CardOption = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 150%;
`;

const CardOptionInput = styled.input`
  margin: 0px 20px 0px 0px;
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
`;

function Options(props) {
  const [check, setCheck] = useState(false);
  const loginUser = useSelector((state) => state.loginUser);
  const questions = useSelector((state) => state.questionsProfile);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCheck(!check); //not needed for updating and displaying checkboxes
    let questionName = e.target.id;
    console.log(
      "%c [ user click question ]",
      "font-size:13px; background:pink; color:#bf2c9f;",
      questionName
    );

    dispatch(
      insertQuestions({ questionName: questionName, check: !check ? 1 : 0 })
    );

    console.log("[ questions ]", questions);

    //axio update user question
    axios
      .put("/updateQuestions/" + loginUser._id, questions)
      .then((response) => {
        console.log("[ option ]", response.data);
      })
      .catch((error) => {
        console.error("There was an error setting user options", error);
      });
  };

  return (
    <CardOption className="card-option">
      <CardOptionInput
        id={props.option}
        type="checkbox"
        checked={props.questions[props.option] === 1 ? true : false}
        onChange={handleChange}
      />
      <label for={props.option}>{props.option}</label>
      {/* {props.option} */}
    </CardOption>
  );
}

export default Options;
