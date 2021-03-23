import React, { Component } from "react";
import data from "./Chair.json";
import RowChair from "./RowChair";

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
        {renderHangGhe()}
        <div class="note_button">
          <div className="note">
            <button className="chairBooked "></button>
            <span></span>
          </div>
          <div className="note">
            <button className="chair-booked2 "></button>
            <span >Ghế thường</span>
          </div>
          <div className="note">
            <button className="statusChair">

            </button>
          </div>
        </div>
      </div>
    );
  }
}
