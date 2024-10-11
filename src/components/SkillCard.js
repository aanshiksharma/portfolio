import React from "react";

import "./card.scss";
import "./skillCard.scss";

function Card({ imgURL, displayText }) {
  return (
    <>
      <div className="card skillCard">
        <img src={imgURL} alt="" />
        <p>{displayText}</p>
      </div>
    </>
  );
}

export default Card;
