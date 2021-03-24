import React, { Component } from "react";
import Book_Ticket from "../Book-Ticket/Book_Ticket";
import Carousel from "../Carousel/Carousel";
import Film from "../Film_Manage/Film";
import Footer from "../Footer/Footer";
import HomeHeader from "../HomeHeader/HomeHeader";
import Loader from "../Loader/Loader";
import "./Home.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cinema from "../Cinema/Cinema";
import Film2 from "../Film_Manage/Film2";

export default class Home extends Component {
  constructor() {
    super();
    console.log("a");
    this.state = {
      black: true,
    };
  }

  changeColor() {
    this.setState({ black: !this.state.black });
  }
  changeFilm() {
    this.setState({ film: !this.state.film });
  }
  render() {
    // let cssFilm = "";
    let title = this.state.black ? "Active" : "noActive";
    let title2 = this.state.black ? "noActive" : "Active";

    let filmStatus = this.state.black ? "ActiveFilm" : "noActiveFilm";
    let filmStatus2 = this.state.black ? "noActiveFilm" : "ActiveFilm";

    return (
      <div>
        {/* loadpage  */}
        <Loader></Loader>
        <div className="home-container">
          <HomeHeader></HomeHeader>
          <Carousel></Carousel>
          <Book_Ticket></Book_Ticket>
          <div className="container mt-5 mb-5 ">
            <div className="film_manage">
              <ul class="select_time">
                <li onClick={this.changeColor.bind(this)} className={title}>
                  <a
                    data-toggle="tab"
                    ng-click="initFilmUpComing()"
                    data-target="#upComingFilms"
                    aria-expanded="true"
                  >
                    <span>Đang Chiếu</span>
                  </a>
                </li>

                <li onClick={this.changeColor.bind(this)} className={title2}>
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
            <div onClick={this.changeFilm.bind(this)} className={filmStatus}>
              <Film></Film>
            </div>
            <div onClick={this.changeFilm.bind(this)} className={filmStatus2}>
              <Film2></Film2>
            </div>
          </div>
          <Cinema></Cinema>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}
