import React from "react";
import "./card.css";

function Card({ image, title, description, id }) {
  return (
    <div className="card-container-2">
      <div className="the-card" key={id}>
        <div className="the-front">
          <img src={image} alt=""></img>
          <h3>{title}</h3>
        </div>
        <div className="the-back">
          <h3>Description:</h3>
          {description === "" ? (
            <p>This specific image of this character has no description</p>
          ) : (
            <p>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
