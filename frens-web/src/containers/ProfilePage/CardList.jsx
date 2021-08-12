import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

function CardList(props) {
  return (
    <CardGrid className="card-grid">
      {props.cardlist.map((card, index) => {
        return <Card card={card} key={index} questions={props.questions} />;
      })}
    </CardGrid>
  );
}

export default CardList;
