import React, { Component } from "react";
import { connect } from "react-redux";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import BookingChair from "./BookingChair";
import PaymentHeader from "./PaymentHeader";

class Payment extends Component {
  render() {
    console.log(this.props.detail_movie);

    return (
      <div>
        <PaymentHeader></PaymentHeader>
        {/* Time-Booking */}

        <div className="topContent row">
          <div className="lefttitle col-3">
            {/* <div className="logocinema" style={{}}>
              <img
                className="logo"
                ng-src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
                src="https://s3img.vcdn.vn/123phim/2018/09/f32670fd0eb083c9c4c804f0f3a252ed.png"
              />
            </div> */}
            <div className="contentcinema">
              <p className="address">
                {this.props.detail_movie.thongTinPhim ? (
                  <span
                    className="pcinema ng-binding"
                    style={{ color: "#8bc541" }}
                  >
                    {this.props.detail_movie.thongTinPhim.tenCumRap}
                  </span>
                ) : (
                  ""
                )}
              </p>
              {this.props.detail_movie.thongTinPhim ? (
                <p className="hour ng-binding">
                  Hôm Nay - {this.props.detail_movie.thongTinPhim.tenRap} -{" "}
                  {this.props.detail_movie.thongTinPhim.gioChieu}{" "}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div
            className="container mt-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BookingChair></BookingChair>
          </div>
        </div>

        {/* End Time-Booking */}
        {/* <PaymentDetails></PaymentDetails> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail_movie: state.getDetailMovie.result,
  };
};

export default connect(mapStateToProps)(Payment);
