import React, { Component } from "react";
import data from "./Chair.json";
import RowChair from "./RowChair";

export default class BookingChair extends Component {
  render() {
    const renderHangGhe = () => {
      return data.map((rowChair, index) => {
        return (
          <div key={index} >
              
            <RowChair row={rowChair}></RowChair>
          </div>
        );
      });
    };
    return <div>{renderHangGhe()}</div>;
  }
}
