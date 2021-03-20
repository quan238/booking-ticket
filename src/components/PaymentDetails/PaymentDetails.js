import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import "./PaymentDetails.scss";

import { getDetailsAPI } from "../../actions/movieActions/GetDetails";
import Payment from "../Payment/Payment";
// import { render } from "@testing-library/react";

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
    console.log(this.props.detail_movie);
    let heThongRap = "BHD-STAR";
    if (detail_movie.heThongRapChieu) {
      heThongRap = detail_movie.heThongRapChieu[0].maHeThongRap;
        console.log(heThongRap);
    }
    console.log(detail_movie);

    return (
      <div>
        <Payment></Payment>
        {/* Right Checkout */}
        <div className=" rightCheckout">
          <div className="all-contents">
            <h1 className="price mt-3 mb-3">50.000 đ</h1>
            <div className="booking-info">
              <div className="cinema-info mb-3">
                <p>{detail_movie.biDanh}</p>
                {/* {this.renderRap()} */}
                {/* <p>{detail_movie.heThongRapChieu[0].maHeThongRap}</p> */}
                <p>{heThongRap}</p>
                <p className="time">{detail_movie.ngayKhoiChieu}</p>
              </div>
              <div
                className="chair mb-3"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <p className="chair-num" style={{ color: "#fb4226" }}>
                  Ghế F13
                </p>
                <p style={{ color: "#44c020" }}>50.000 đ</p>
              </div>
              <div className="customer-info">
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="Email mb-3"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="Telephone mb-3"
                />
                <div className="discount mb-3">
                  <input type="text" placeholder="Mã giảm giá" />
                  <button className="btn-apply"> Áp dụng</button>
                </div>
              </div>
              <div className="payment">
                <p className="mb-2">Hình thức thanh toán</p>
                <div className="paymentMethod">
                  <input type="radio" name="payment" defaultValue="Visa" />
                  <i className="fas fa-wallet pl-2 pr-2" />
                  <label className="mb-0"> Visa, Master, JCB</label>
                </div>
              </div>
            </div>
          </div>
          <button className="btn-order">Đặt Vé</button>
        </div>
        {/* End Right Checkout */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detail_movie: state.getDetailMovie.result,
  };
};
export default connect(mapStateToProps)(PaymentDetails);
