import React, { Component } from "react";
import "./Carousel.scss";

export default class Carousel extends Component {
  render() {
    return (
      <div>
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
              <img
                src="https://s3img.vcdn.vn/123phim/2021/03/bo-gia-16146819941008.png"
                alt="First slide"
              />
            </div>
            <div className="carousel-item">
              <img src="https://touchcinema.com/storage/phim-2021/ddy7ptk-e2cbec0e-45df-4709-8f06-e5d3eca07b1c.png?fbclid=IwAR1rQssh8XG5oVdd0Xh_YRo0-utIubk9RQRRxlF0t2Bw3NL_oC6y4Et03hg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img
                src="https://s3.cloud.cmctelecom.vn/tinhte1/2011/06/2929868_optimus_prime_tf3_high_resolution-HD.jpg?fbclid=IwAR3EY_1N1uWnVBUO-G3-vuGb20Kj2PNIiiqj-JPlbQ3ZIVrpCqpR42XWQUg"
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
      </div>
    );
  }
}
