import React, { Component } from "react";
import "./Carousel.scss";

export default class Carousel extends Component {
  render() {
    return (
      <div >
        <div
          id="carouselExampleIndicators"
          className="carousel slide film-carousel"
          data-ride="carousel"
        >
          <ol className="carousel-indicators mb-5">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./img/BoGia_Teaser1.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src="./img/Avengers-Endgame.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img
                src="./img/PosterFilm3.jpg"
                alt="Third slide"
                className="d-block w-100"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* End of Carousel */}
      </div>
    );
  }
}
