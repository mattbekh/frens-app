import React, { useState, useRef, useEffect } from "react";
import Options from "./Options";

import "./Card.css";

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
    <div
      className={`card${flip ? "flip" : ""}`}
      style={{ height: height }}
      onClick={() => setFlip(true)}
    >
      <div className="front" ref={frontEl}>
        {props.card.question}
      </div>
      <div className="back" ref={backEl}>
        {props.card.choices.choice.map((option) => {
          return (
            <Options option={option} key={option} questions={props.questions} />
          );
        })}
      </div>
    </div>
  );
}

export default Card;
