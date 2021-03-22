import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import "./PaymentDetails.scss";

import { getDetailsAPI } from "../../actions/movieActions/GetDetails";
import Payment from "../Payment/Payment";
// import { render } from "@testing-library/react";
import swal from "sweetalert";
// import { Link } from "react-router-dom";
import Home from "../Home/Home";
import { Redirect } from "react-router-dom";

class PaymentDetails extends Component {
  //   console.log(props);
  // const {getDetailMovie} = useSelector((state)=>state)
  // console.log(getDetailMovie)
  //   const dispatch = useDispatch();
  // console.log(dispatc)
  //   useEffect(() => {

  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    // console.log(dispatch(getDetailsAPI(id)));
    this.props.dispatch(getDetailsAPI(id));
  }
  //   console.log(useSelector((state) => state.getDetailMovie));
  //   useEffect(() => {
  //     console.log(props.movie_Detail);
  //     // console.log(props.match.params);
  //     // let { id } = props.match.params;
  //     // console.log(id);
  //   }, []);
  //   renderRap = () => {
  //     return (
  //       this.props.detail_movie.heThongRapChieu &&
  //       this.props.detail_movie.heThongRapChieu.map((item, index) => {
  //         return (
  //           <div className="btn btn-success p-5">
  //             {item.maHeThongRap}
  //           </div>
  //         );
  //       })
  //     );
  //   };

  render() {
    let { detail_movie } = this.props;
    // console.log(item)
    // console.log(this.props.detail_movie);
    let heThongRap = "BHD-STAR";
    if (detail_movie.heThongRapChieu) {
      console.log(this.props.detail_movie);
      heThongRap = detail_movie.heThongRapChieu[0].maHeThongRap;
      console.log(heThongRap);
    }
    let cumRapChieu = [];
    if (detail_movie.heThongRapChieu) {
      if (detail_movie.heThongRapChieu[0].cumRapChieu) {
        cumRapChieu = detail_movie.heThongRapChieu[0].cumRapChieu;
        console.log(cumRapChieu);
      }
    }

    // console.log(detail_movie);
    // console.log(this.props.rowPurchased);
    return (
      <div>
        <Payment></Payment>
        {/* Right Checkout */}
        <div className=" rightCheckout">
          <div className="all-contents">
            <h1 className="price mt-5 mb-3">
              {this.props.rowPurchased &&
                this.props.rowPurchased
                  .reduce((tongTien, chairbooked, index) => {
                    return (tongTien += chairbooked.price);
                  }, 0)
                  .toLocaleString()}
            </h1>
            <div className="booking-info">
              <div className="cinema-info mb-3">
                <p>{detail_movie.biDanh}</p>
                {/* {this.renderRap()} */}
                {/* <p>{detail_movie.heThongRapChieu[0].maHeThongRap}</p> */}
                <p>{heThongRap}</p>
                <p className="time">{detail_movie.ngayKhoiChieu}</p>
              </div>
              <div className="chair mb-3">
                {this.props.rowPurchased &&
                  this.props.rowPurchased.map((chairbooked, index) => {
                    return (
                      <div
                        key={index}
                        style={{ display: "block" }}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          className="chair-num mx-2"
                          style={{ color: "#fb4226" }}
                        >
                          GHẾ: {chairbooked.number}
                        </span>
                        <span style={{ color: "#44c020" }}>
                          GIÁ: {chairbooked.price}
                        </span>
                      </div>
                    );
                  })}
              </div>
              <form
                className="customer-info"
                ref="submitForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (e.target.checkValidity()) {
                    swal(
                      "Booking successfully",
                      "You clicked the button!",
                      "success"
                    ).then(() => {
                      //
                      // <Redirect to="/"></Redirect>
                      window.location.href = "/";
                    });

                    // <Link to="/" />;

                    e.target.value = "";
                  }
                }}
              >
                <input
                  type="text"
                  // required
                  placeholder="E-Mail"
                  className="Email mb-3"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  // required
                  className="Telephone mb-3"
                />
                <div className="discount mb-3">
                  <input type="text" placeholder="Mã giảm giá" />
                  <button className="btn-apply"> Áp dụng</button>
                </div>
                <div className="payment">
                  <p className="mb-2">Hình thức thanh toán</p>
                  <div className="paymentMethod">
                    <input
                      // required
                      type="radio"
                      name="payment"
                      defaultValue="Visa"
                    />
                    <i className="fas fa-wallet pl-2 pr-2" />
                    {/* <label className="mb-0"> Visa, Master, JCB</label> */}
                  </div>
                </div>
                <button
                  type="submit  "
                  className="btn-order "
                  style={{ background: "#f44336" }}
                  onClick={(event) => {}}
                >
                  Đặt Vé
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* End Right Checkout */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detail_movie: state.getDetailMovie.result,
    rowPurchased: state.getTicket.rowPurchased,
  };
};
export default connect(mapStateToProps)(PaymentDetails);
