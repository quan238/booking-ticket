import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../HomeHeader/HomeHeader";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";
import "./DetailMovies.scss";
import { getDetailsAPI } from "../../actions/movieActions/GetDetails";
import { navLink, Link } from "react-router-dom";
class DetailMovies extends Component {
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
    return (
      <div>
        <HomeHeader></HomeHeader>
        <div className="detail">
          <div
            className="banner"
            style={{ background: `${detail_movie.hinhAnh}` }}
          >
            <div className="container">
              {/* <div class="detail-top col-4"></div> */}
              <div className="film-info">
                <div className="info-image">
                  <img src={detail_movie.hinhAnh} alt />
                </div>
                <div className="info text-light ml-3">
                  <p className="mb-1">12.03.2021</p>
                  <div
                    className="info-text1"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <p className="m-0 mr-2">
                      <strong>C13</strong>
                    </p>
                    <h5 className="m-0">{detail_movie.tenPhim}</h5>
                  </div>
                  <p className="m-0 mb-1">128 phút - 0 IMDb -</p>
                  <Link
                    to={`/details/movie/${detail_movie.maPhim}/payment`}
                    className="btnBuy text-light"
                  >
                    Mua Vé
                  </Link>
                </div>
              </div>
              {/*Star*/}
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx={70} cy={70} r={70} />
                    <circle cx={70} cy={70} r={70} />
                  </svg>
                  <div className="number">
                    <h2>{detail_movie.danhGia}</h2>
                  </div>
                </div>
                <div className="star">
                  <img src="./img/star.png" alt />
                  <img src="./img/star.png" alt />
                  <img src="./img/star.png" alt />
                  <img src="./img/star.png" alt />
                  <img src="./img/rate.png" alt />
                  <p className="text-light" style={{ fontWeight: "bold" }}>
                    {/* 268 người đánh giá */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="navCenter">
            <ul>
              <li>Lịch Chiếu</li>
              <li>Thông tin</li>
              <li>Đánh giá</li>
            </ul>
          </div>
          <a id="button" />
        </div>

        <Footer></Footer>
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
