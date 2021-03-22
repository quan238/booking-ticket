import React from "react";
import { connect } from "react-redux";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import BookingChair from "./BookingChair";
import PaymentHeader from "./PaymentHeader";

function Payment() {
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

        <div className="container mt-5" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <BookingChair></BookingChair>
        </div>
      </div>

      {/* End Time-Booking */}
      {/* <PaymentDetails></PaymentDetails> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return 
  ;
};

export default connect(mapStateToProps)(Payment);
