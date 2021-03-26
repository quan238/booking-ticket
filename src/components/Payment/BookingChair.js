import React, { Component } from "react";
import data from "./Chair.json";
import RowChair from "./RowChair";
import screen from "../App/assets/img/screen.png";

export default class BookingChair extends Component {
  render() {
    const renderHangGhe = () => {
      return data.map((rowChair, index) => {
        return (
          <div key={index}>
            <RowChair row={rowChair}></RowChair>
          </div>
        );
      });
    };
    return (
      <div>
        <div className="screen ">
          <div className="namescreen " style={{marginLeft:"52px"}}>
            <img style={{ height: "90%" }} src={screen} />
          </div>
        </div>
        <div className="container">{renderHangGhe()}</div>
        <div class="note_button">
          <div className="note">
            <button className="chairBooked "></button>
            <span></span>
          </div>
          <div className="note">
            <button className="chair-booked2 "></button>
            <span>Ghế thường</span>
          </div>
          <div className="note">
            <button className="statusChair"></button>
          </div>
        </div>
      </div>
    );
  }
}
