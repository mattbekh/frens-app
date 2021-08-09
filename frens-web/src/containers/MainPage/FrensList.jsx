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
        // const userId = fren._id.toString();

        const userId = fren._id;
        const user = fren;
        const info = fren;
        const name = fren.username;
    
        return (
          <Fren
            key={userId}
            user={fren}
            name={username}
            openModal={props.openModal}
          />
        );
      })}
    </FrensWrap>
  );

}

export default FrensList;