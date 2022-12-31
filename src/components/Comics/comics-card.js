import React from "react";
import "../Characters/card.css";

function ComicCard({
  image,
  title,
  id,
  price,
  pages,
  issue,
  creator,
  description,
}) {
  return (
    <div className="card-container-2">
      <div className="the-card" key={id}>
        <div className="the-front">
          <img src={image} alt=""></img>
          <h4>{title}</h4>
        </div>
        <div className="the-back">
          <h3>Information</h3>
          <h5>Description:</h5>
          <p>{description}</p>
          <p>Creator: {creator}</p>
          <p>Price: {price}</p>
          <p>Pages: {pages}</p>
          <p>Issue: {issue}</p>
        </div>
      </div>
    </div>
  );
}

export default ComicCard;
