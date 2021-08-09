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
      {props.cardlist.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </CardGrid>
  );
}

export default CardList;
