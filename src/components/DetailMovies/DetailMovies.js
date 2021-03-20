import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "../HomeHeader/HomeHeader";
import Footer from '../Footer/Footer'
import Loader from "../Loader/Loader";
import "./DetailMovies.scss"
class DetailMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HomeHeader ></HomeHeader>
        <div className="banner">
          <div className="container">
            {/* <div class="detail-top col-4"></div> */}
            <div className="film-info">
              <div className="info-image">
                <img src="https://s3img.vcdn.vn/mobile/123phim/2021/02/bo-gia-16144973777370_215x318.png" alt />
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
                  <h5 className="m-0">Bố Già</h5>
                </div>
                <p className="m-0 mb-1">128 phút - 0 IMDb -</p>
                <button className="btnBuy text-light">Mua Vé</button>
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
                  <h2>8.5</h2>
                </div>
              </div>
              <div className="star"></div>
            </div>
          </div>
        </div>
      {/* <Footer></Footer> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovies);
