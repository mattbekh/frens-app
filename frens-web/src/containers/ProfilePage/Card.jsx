import React, { useState, useRef, useEffect } from "react";
import "./Card.css";
import Options from "./Options";
import styled from "styled-components";

const CardWrapper = styled.div`
  font-family: "Gill Sans", sans-serif;
  font-size: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.25rem;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3);
  /* background-color: var(--black); */
  transform-style: preserve-3d;
  transition: 150ms;
  cursor: pointer;
  transform: perspective(1000px) rotateY(var(--rotate-y, 0))
    translateY(var(--translate-y, 0));
  &: hover {
    --translate-y: -2px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
  }
`;
const CardFront = styled.div`
  position: absolute;
  padding: 2rem;
  backface-visibility: hidden;
  left: 0;
`;
const CardBack = styled.div`
  position: absolute;
  padding: 1rem;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

function Card(props) {
  const [flip, setFlip] = useState(false);
  const [height, setHeight] = useState("initial");
  const frontEl = useRef();
  const backEl = useRef();

  function setMaxHeight() {
    const frontHeight = frontEl.current.getBoundingClientRect().height;
    const backHeight = backEl.current.getBoundingClientRect().height;
    setHeight(Math.max(frontHeight, backHeight, 100));
  }

  useEffect(setMaxHeight, [props.card.options, props.card.question]);

  return (
    //dynamic class
    <div
      className={`card${flip ? "flip" : ""}`}
      style={{ height: height }}
      onClick={() => setFlip(true)}
    >
      <div className="front" ref={frontEl}>
        {props.card.question}
      </div>
      <div className="back" ref={backEl}>
        {props.card.options.map((option) => {
          return <Options option={option} key={option} />;
        })}
      </div>
    </div>
  );
}

export default Card;
