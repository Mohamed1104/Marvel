import React from "react";
import useFetch from "../../hooks/useFetch";
import "./comic.css";

import ComicCard from "./comics-card";

function Comics() {
  const url = `https://gateway.marvel.com/v1/public/comics?dateRange=2022-01-01%2C2022-12-27&ts=1&apikey=a4677ae4657491566008cecd5f1c2ad9&hash=e0acf00d7a9c19aceb8fb683d5efe5b0`;
  const { data: comics } = useFetch(url);
  console.log(comics?.results);
  const results = comics?.results;

  return (
    <div className="comics">
      <div className="comics-header">
        <h1>Comics</h1>
        <h3>Latest Comics released within the last year...</h3>
      </div>
      <div className="card-container">
        {results?.map((comic) => (
          <ComicCard
            title={comic?.title}
            id={comic?.id}
            image={`${comic?.thumbnail?.path}/portrait_xlarge.${comic?.thumbnail?.extension}`}
            creator={comic?.creators?.items[0].name}
            price={
              comic?.prices[0].price === 0
                ? "Free"
                : "£" + comic?.prices[0].price
            }
            pages={comic?.pageCount}
            issue={comic?.issueNumber}
            description={
              comic?.description === null
                ? "This comic has no description"
                : comic?.description
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Comics;
