import React from "react";
import Fren from "./Fren";
import styled from "styled-components";

import defaultImg from "../../images/Frens-1.png";

const FrensWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0 auto;
  justify-content: center;
  padding: 4rem 0 4rem;
`;

function FrensList(props) {

  console.log(props.frensList);
  return (
    <FrensWrap className="frens-list" id="frenslist">
      {props.frensList.map((fren) => {
        // console.log("[ fren ]", fren);
        // const [user] = Object.entries(fren);
        // const userId = user[0];
        // const info = user[1];

        const userId = fren._id;
        const user = fren;
        const info = fren;
        const name = fren.username;

        return (
          <Fren
            key={userId}
            user={user}
            name={name}
            imgURL={info.social?.photo ? info.social.photo : defaultImg}
            contactInfo={
              info.social?.facebook ? info.social.facebook : info.email
            }
            openModal={props.openModal}
            socket={props.socket}
          />
        );
      })}
    </FrensWrap>
  );
}

export default FrensList;