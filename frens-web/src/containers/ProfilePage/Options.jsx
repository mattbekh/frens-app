import React, { useState } from "react";
import styled from "styled-components";

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

  const handleChange = () => {
    setCheck(!check);
  };

  return (
    <CardOption className="card-option">
      <CardOptionInput
        id={props.option}
        type="checkbox"
        value={props.option}
        checked={check}
        onChange={handleChange}
      />
      <label for={props.option}>{props.option}</label>
      {/* {props.option} */}
    </CardOption>
  );
}

export default Options;
