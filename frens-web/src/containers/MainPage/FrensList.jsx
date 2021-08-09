import React, { useEffect } from "react";
import Fren from "./Fren";
import styled from "styled-components";
import { BiSleepy } from "react-icons/bi";

const FrensWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0 auto;
  justify-content: center;
  padding: 4rem 0 4rem;
`;

function FrensList(props) {
  console.log("sleepy sleep");

  return (
    <FrensWrap className="frens-list" id="frenslist">
      {props.frensList.map((fren) => {
        // const [user] = Object.entries(fren);
        // const userId = user[0];
        // const info = user[1];

        const userId = fren._id.toString();
        const username = fren.username;
        return (
          <Fren
            key={userId}
            user={fren}
            name={username}
            openModal={props.openModal}
            socket={props.socket}
          />
        );
      })}
    </FrensWrap>
  );

}

export default FrensList;