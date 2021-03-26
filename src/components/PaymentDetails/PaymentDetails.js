import React, { Component } from "react";
import { connect } from "react-redux";
import "./PaymentDetails.scss";
import {
  getDetailPayment,
  getDetailsAPI,
} from "../../actions/movieActions/GetDetails";
import Payment from "../Payment/Payment";
// import { render } from "@testing-library/react";
import swal from "sweetalert";
// import { Link } from "react-router-dom";
import emailjs from "emailjs-com";

class PaymentDetails extends Component {
  //   console.log(props);
  // const {getDetailMovie} = useSelector((state)=>state)
  // console.log(getDetailMovie)
  //   const dispatch = useDispatch();
  // console.log(dispatc)
  //   useEffect(() => {
  state = {
    email: "",
    phone: "",
  };

  handleChangeValue = (event) => {
    let { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        // console.log(this.state);
      }
    );
  };
  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    // console.log(dispatch(getDetailsAPI(id)));
    this.props.dispatch(getDetailPayment(id));
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
    let thongTin = {};
    thongTin = detail_movie.thongTinPhim;
    // console.log(thongTinPhim);
    // console.log(this.props.detail_movie);
    let heThongRap = "BHD-STAR";

    // console.log(this.state);
    // if (detail_movie.thongTinPhim) {
    //   console.log(this.props.detail_movie);
    //   // thongTinPhim = detail_movie.heThongRapChieu[0].maHeThongRap;
    //   console.log(heThongRap);
    // }
    // let cumRapChieu = [];
    // if (detail_movie.heThongRapChieu) {
    //   if (detail_movie.heThongRapChieu[0].cumRapChieu) {
    //     cumRapChieu = detail_movie.heThongRapChieu[0].cumRapChieu;
    //     console.log(cumRapChieu);
    //   }
    // }
    // console.log(this.props.inform);
    let tongTien = 0;
    if (this.props.rowPurchased) {
      tongTien = this.props.rowPurchased.reduce(
        (tongTien, chairbooked, index) => {
          tongTien += chairbooked.price;
          // this.state.chairPrice = tongTien;
          return tongTien;
        },
        0
      );
    }
    let contentChair = "";
    if (this.props.rowPurchased) {
      this.props.rowPurchased.map((chairbooked, index) => {
        return (contentChair += ` GHẾ: ${chairbooked.number} \n \ `);
      });
    }
    let nameMovie = "";
    let nameCinema = "";
    let time = "";
    let theater = "";
    let chair = "";
    if (detail_movie.thongTinPhim) {
      nameMovie = detail_movie.thongTinPhim.tenPhim;
      nameCinema = detail_movie.thongTinPhim.tenCumRap;
      time = detail_movie.thongTinPhim.gioChieu;
      theater = detail_movie.thongTinPhim.tenRap;
    }
    // console.log(tongTien);
    let templateParams = {
      from_name: "GROUP-4",
      email: this.state.email,
      phone: this.state.phone,
      nameMovie: nameMovie,
      nameCinema: nameCinema,
      theater: theater,
      time: time,
      prices: tongTien,
      contentChair: contentChair,
    };
    console.log(templateParams);
    // this.state.chairPrice = tongTien;
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
                    tongTien += chairbooked.price;
                    // this.state.chairPrice = tongTien;
                    return tongTien;
                  }, 0)
                  .toLocaleString()}
            </h1>
            <div className="booking-info">
              <div className="cinema-info mb-3">
                {detail_movie.thongTinPhim ? (
                  <p>{detail_movie.thongTinPhim.tenPhim}</p>
                ) : (
                  " "
                )}
                {/* <p>{thongTin?.tenPhim}</p> */}

                {/* {this.renderRap()} */}
                {/* <p>{detail_movie.heThongRapChieu[0].maHeThongRap}</p> */}
                {detail_movie.thongTinPhim ? (
                  <p>{detail_movie.thongTinPhim.tenCumRap}</p>
                ) : (
                  " "
                )}
                {detail_movie.thongTinPhim ? (
                  <p className="time">{detail_movie.thongTinPhim.ngayChieu}</p>
                ) : (
                  " "
                )}
                {/* <p className="time">{detail_movie.thongTinPhim.ngayChieu}</p> */}
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
                  // inform: state.ConfirmUser.credentials,

                  if (e.target.checkValidity() && this.props.inform) {
                    swal({
                      title: "Are you sure?",
                      text:
                        "When you click OK, you will receive your information about ticket in your gmail!",
                      icon: "warning",
                      buttons: true,
                      dangerMode: true,
                    }).then((willDelete) => {
                      if (willDelete) {
                        swal(
                          "Booking successfully",
                          "You clicked the button!",
                          "success"
                        ).then(() => {
                          //
                          emailjs.send("service_t0jk43l", "template_qfne4yt");
                          // e.preventDefault();

                          // emailjs
                          //   .send(
                          //     "gmail",
                          //     "template_qfne4yt",
                          //     templateParams,
                          //     "user_lqDsKfrF2RDYLZ2iGy1ss"
                          //   )
                          //   .then(
                          //     (result) => {
                          //       console.log(result.text);
                          //     },
                          //     (error) => {
                          //       console.log(error.text);
                          //     }
                          //   );
                          emailjs
                            .send(
                              "service_t0jk43l",
                              "template_qfne4yt",
                              templateParams,
                              "user_lqDsKfrF2RDYLZ2iGy1ss"
                            )
                            .then(
                              () => {
                                // btn.value = "Send Email";
                                window.location.href = "/";
                              },
                              (err) => {
                                // btn.value = "Send Email";
                                alert("error");
                                // alert(JSON.stringify(err));
                              }
                            );

                          // <Redirect to="/"></Redirect>
                          // window.location.href = "/";
                        });
                      } else {
                        swal("Booking Again!");
                      }
                    });
                    // <Link to="/" />;

                    e.target.value = "";
                  } else {
                    swal("Login Firstly!", "You clicked the button!", "error");
                  }
                }}
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="E-Mail"
                  className="Email mb-3"
                  onChange={this.handleChangeValue}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  name="phone"
                  className="Telephone mb-3"
                  onChange={this.handleChangeValue}
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
                      checked
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
                  style={{ background: "#f44336", borderRadius: "2px" }}
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
    inform: state.ConfirmUser.credentials,
  };
};
export default connect(mapStateToProps)(PaymentDetails);
