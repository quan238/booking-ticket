import React from "react";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import PaymentHeader from "./PaymentHeader";

export default function Payment() {
  return (
    <div>
      <PaymentHeader></PaymentHeader>
      {/* Time-Booking */}

      <div className="topContent row">
        <div className="lefttitle">
          <div className="logocinema" style={{}}>
            <img
              className="logo"
              ng-src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
              src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
            />
          </div>
          <div className="contentcinema">
            <p className="address">
              <span className="pcinema ng-binding" style={{ color: "#8bc541" }}>
                BHD Star
              </span>
              <span className="cinemaname ng-binding" style={{}}>
                - Vincom 3/2
              </span>
            </p>
            <p className="hour ng-binding">Hôm nay - 22:10 - RẠP 2</p>
          </div>
        </div>
        <div className="righttitle">
          <p className="info1">thời gian giữ ghế</p>
          <p className="info2">
            <span className="minute">04</span>:
            <span className="second">55</span>
          </p>
        </div>
      </div>
      {/* End Time-Booking */}
      {/* <PaymentDetails></PaymentDetails> */}
    </div>
  );
}
