import React from "react";
import useFetch from "../../hooks/useFetch";
import { useState } from "react";
import "./characters.css";
import Card from "./card";

function Characters() {
  const [input, setInput] = useState("");
  const [url, setUrl] = useState(
    "https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=a4677ae4657491566008cecd5f1c2ad9&hash=e0acf00d7a9c19aceb8fb683d5efe5b0"
  );
  const { data: marvel } = useFetch(url);
  console.log(marvel?.results);
  const results = marvel?.results;

  function handleChange(e) {
    setInput(e.target.value);
    console.log("its changing", e.target.value);
  }

  function handleClick() {
    input === ""
      ? alert("Please enter a character")
      : setUrl(
          `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${input}&ts=1&apikey=a4677ae4657491566008cecd5f1c2ad9&hash=e0acf00d7a9c19aceb8fb683d5efe5b0`
        );
    setInput("");
  }
  return (
    <div className="character">
      <h1>Characters</h1>
      <div className="input-container">
        <input
          value={input}
          type="text"
          onChange={handleChange}
          placeholder="Type in the character you want..."
          className="input"
        ></input>
        <button className="button-24" onClick={handleClick}>
          Click
        </button>
      </div>
      <div className="card-container">
        {marvel === null ? (
          <p>Choose a character</p>
        ) : (
          results.map((result) => (
            <Card
              id={result?.id}
              title={result?.name}
              image={`${result?.thumbnail?.path}/portrait_xlarge.${result?.thumbnail?.extension}`}
              description={result?.description}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Characters;
