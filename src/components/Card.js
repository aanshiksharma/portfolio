import React from "react";

import './card.scss';

function Card({ imgURL, displayText }) {
  return (
    <>
      <div className="card">
        <img src={imgURL} alt="" />
        <p>{displayText}</p>
      </div>
    </>
  );
}

export default Card;
