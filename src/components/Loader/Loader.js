import React, { Component } from "react";
import "./Loader.scss";
export default class Loader extends Component {
  componentDidMount() {
    setTimeout(() => {
      document.querySelector(".loading").style.transition = "opacity 5s";
      document.querySelector(".loading").style.opacity = "0";
      document.querySelector(".home-container").style.display = "none";
      setTimeout(() => {
        document.querySelector(".loading").remove();
      
        document.querySelector(".home-container").style.display="block"
        document.querySelector(".home-container").style.transition = "opacity 5s";
      }, 2000);
    }, 100);
  }
  render() {
    return (
      <div class="loading">
        <label>Loading...</label>

        <div id="loader">
          <div></div>
        </div>
      </div>
    );
  }
}
