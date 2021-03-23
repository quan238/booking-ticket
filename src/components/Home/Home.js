import React, { Component } from "react";
import Book_Ticket from "../Book-Ticket/Book_Ticket";
import Carousel from "../Carousel/Carousel";
import Film from "../Film_Manage/Film";
import Footer from "../Footer/Footer";
import HomeHeader from "../HomeHeader/HomeHeader";
import Loader from "../Loader/Loader";
import "./Home.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* loadpage  */}
        <Loader></Loader>
        <div className="home-container">
          <HomeHeader></HomeHeader>
          <Carousel></Carousel>
          <Book_Ticket></Book_Ticket>
          <div className="container mt-5 ">
            <div className="film_manage">
              <ul class="select_time">
                <li>
                  <a
                    data-toggle="tab"
                    ng-click="initFilmUpComing()"
                    data-target="#upComingFilms"
                    aria-expanded="true"
                  >
                    <span>Đang Chiếu</span>
                  </a>
                </li>

                <li>
                  <a
                    data-toggle="tab"
                    ng-click="initFilmUpComing()"
                    data-target="#upComingFilms"
                    aria-expanded="true"
                  >
                    <span>Sắp Chiếu</span>
                  </a>
                </li>
              </ul>
            </div>

            <Film></Film>
          </div>

          <Footer></Footer>
        </div>
      </div>
    );
  }
}
