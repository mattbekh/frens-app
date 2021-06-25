import React from "react";
import Fren from "./Fren";
import styled from "styled-components";

const FrensWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 0 auto;
  justify-content: center;
  padding: 4rem 0 4rem;
`;

function FrensList(props) {
  return (
    <FrensWrap className="frens-list" id="frenslist">
      {props.frensList.map((fren) => {
        const [user] = Object.entries(fren);
        const userId = user[0];
        const info = user[1];
        return (
          <Fren
            key={userId}
            name={userId}
            imgURL={info.social.photo}
            contactInfo={info.social.facebook}
            openModal={props.openModal}
          />
        );
      })}
    </FrensWrap>
  );

}

export default FrensList;