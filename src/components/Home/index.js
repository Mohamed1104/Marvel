import React from "react";
import "./home.css";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    <div className="Home">
      <div className="header">
        <h1>WELCOME</h1>
        <p>Latest Movies...</p>
      </div>
      <div className="carousel-container">
        <Carousel className="carousel">
          <Carousel.Item interval={4000}>
            <img
              className="d-block"
              src="https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Black Panther: Wakanda Forever</h3>
              <p>Release Date: 11 November 2022</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block"
              src="https://m.media-amazon.com/images/M/MV5BOGVmNTlkNTYtNmFlZS00YTQyLWExODMtOGQ1NWIzZDIxNDIxXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Thor: Love and Thunder</h3>
              <p>Release Date: 8 July 2022 </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block"
              src="https://m.media-amazon.com/images/M/MV5BZWJjM2FlMzYtNWQ3Ny00MzM0LTgzY2EtNWU3YzExYmZhMWRiXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Doctor Strange in the Multiverse of Madness</h3>
              <p>Release Date: 5 May 2022 </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block"
              src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/spider-mannowayhome_lob_crd_03.jpg"
              alt="Fourth slide"
            />

            <Carousel.Caption>
              <h3> Spider-Man No Way Home</h3>
              <p>Release Date: 17 December 2021 </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={4000}>
            <img
              className="d-block"
              src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/eternals_lob_crd_06.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Eternals</h3>
              <p>Release Date: 5 November 2021 </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
