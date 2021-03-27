import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../HomeHeader/HomeHeader";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import "./DetailMovies.scss";
import { getDetailsAPI } from "../../actions/movieActions/GetDetails";
import { navLink, Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import InfoDetail from "./InfoDetail";
import SmoothScrolling from "../App/assets/js/smoothScrolling";
// import SmoothScrolling from "../../../node_modules/";
import star from "./img/star.png";
import rate from "./img/rate.png";

class DetailMovies extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      status: true,
    };
    this.scrollUp = this.scrollUp.bind(this);
  }
  scrollUp() {
    // this.changeActive.bind(this)
    SmoothScrolling.scrollTo("lichChieu");
  }
  changeActive() {
    this.setState({ status: !this.state.status });
  }
  changeColor() {
    this.setState({ status: !this.state.status });
  }

  componentDidMount() {
    let { id } = this.props.match.params;
    console.log(id);
    // console.log(dispatch(getDetailsAPI(id)));
    this.props.dispatch(getDetailsAPI(id));
  }
  render() {
    let { detail_movie } = this.props;
    // if (detail_movie.heThongRapChieu) {
    console.log(detail_movie);
    // }
    let title = this.state.status ? "Active" : "noActive";
    let title2 = this.state.status ? "noActive" : "Active";
    // let title3 = this.state.status ? "noActive" : "Active";

    let status = this.state.status ? "ActiveStatus" : "noActiveStatus";
    let status2 = this.state.status ? "noActiveStatus" : "ActiveStatus";
    // let status3 = this.state.status ? "noActiveStatus" : "ActiveStatus";

    let a = this.props.detail_movie.danhGia;
    return (
      <div className="All">
        <HomeHeader></HomeHeader>
        <div className="detail">
          <div className="banner">
            <div className="img-blur">
              <img src={detail_movie.hinhAnh} alt />
            </div>
            <div className="container">
              {/* <div class="detail-top col-4"></div> */}
              <div className="film-info">
                <div className="info-image">
                  <img src={detail_movie.hinhAnh} alt />
                </div>
                <div className="info text-light ml-3">
                  {/* <p className="mb-1">{detail_movie.ngayKhoiChieu}</p> */}
                  <div
                    className="info-text1"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <p className="m-0 mr-2">
                      {detail_movie.maPhim % 3 === 0 ? (
                        <strong>
                          C13
                          {/* </span> */}
                        </strong>
                      ) : (
                        <strong> P</strong>
                      )}
                    </p>
                    <h3 className="m-0">{detail_movie.tenPhim}</h3>
                  </div>
                  {/* <p className="m-0 mb-1">128 phút - 0 IMDb -</p> */}
                  <a
                    // to={`/details/movie/${detail_movie.maPhim}/payment`}
                    onClick={this.scrollUp}
                    className="btnBuy text-light"
                  >
                    Mua Vé
                  </a>
                </div>
                {/*  */}
              </div>
              {/*Star*/}
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx={70} cy={70} r={70} />
                    <circle
                      cx={70}
                      cy={70}
                      r={70}
                      style={{
                        strokeDashoffset: `calc(440 - (440 * ${a} * 10) / 100)`,
                      }}
                    />
                  </svg>
                  <div className="number">
                    <h2>{detail_movie.danhGia}</h2>
                  </div>
                </div>
                <div className="star mt-4">
                  <img src={star} style={{ margin: "0 5px" }} alt="" />
                  <img src={star} style={{ margin: "0 5px" }} alt="" />
                  <img src={star} style={{ margin: "0 5px" }} alt="" />
                  <img src={star} style={{ margin: "0 5px" }} alt="" />
                  <img src={rate} style={{ margin: "0 5px" }} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="navCenter "
            style={{ marginTop: "80px" }}
            id="lichChieu"
          >
            <ul>
              <li onClick={this.changeColor.bind(this)} className={title}>
                Lịch Chiếu
              </li>
              <li onClick={this.changeColor.bind(this)} className={title2}>
                Thông tin
              </li>
              {/* <Calendar></Calendar> */}
            </ul>
          </div>
          <a id="button" />
          {/* <Calendar></Calendar> */}
        </div>
        {/* <div className="container"> */}
        <div className={status}>
          <Calendar></Calendar>
        </div>
        <div className={status2}>
          <InfoDetail></InfoDetail>
        </div>

        {/* </div> */}
        {/* <Footer></Footer> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detail_movie: state.getDetailMovie.result,
  };
};
// const mapDispatchToProps = (dispatch) => {};
export default connect(mapStateToProps)(DetailMovies);
