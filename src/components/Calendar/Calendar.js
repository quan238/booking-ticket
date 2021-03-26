import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getDetailsAPI } from "../../actions/movieActions/GetDetails";
import "./Calendar.css";
import moment from "moment";
class Calendar extends Component {
  //   componentDidMount() {
  //     let { id } = this.props.match.params;
  //     console.log(id);
  //     // console.log(dispatch(getDetailsAPI(id)));
  //     this.props.dispatch(getDetailsAPI(id));
  //   }
  render() {
    // console.log(this.props.detail_movie);
    return (
      //   <div className="calendar ">

      //     <div className="container">
      //       <div className="row">
      //         <div className="col-3">
      //           <div className="cinema">
      //             <div className="logo-cinema">
      //               <img src="./img/lotte.png" alt />
      //             </div>
      //             <div className="cinema-name">Lotte Cinema</div>
      //           </div>
      //           <div className="cinema">
      //             <div className="logo-cinema">
      //               <img src="./img/lotte.png" alt />
      //             </div>
      //             <div className="cinema-name">Lotte Cinema</div>
      //           </div>
      //         </div>
      //         <div className="col-9">

      //           <div className="chooseCinema">
      //             <div className="chooseTime">
      //               <div className="cinema-info">
      //                 <div className="cinema-img">
      //                   <img
      //                     src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-da-nang-15383885382313.jpg"
      //                     alt
      //                   />
      //                 </div>
      //                 <div className="info">
      //                   <span>Lotte - Đà Nẵng</span>
      //                   <span>Lotte Mart Đà Nẵng, Hải Châu, ĐN</span>
      //                 </div>
      //               </div>
      //               <div className="typeOfFilm">2D Digital</div>
      //               <div className="timeSection">
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //               </div>
      //             </div>
      //             <div className="chooseTime">
      //               <div className="cinema-info">
      //                 <div className="cinema-img">
      //                   <img
      //                     src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-da-nang-15383885382313.jpg"
      //                     alt
      //                   />
      //                 </div>
      //                 <div className="info">
      //                   <span>Lotte - Đà Nẵng</span>
      //                   <span>Lotte Mart Đà Nẵng, Hải Châu, ĐN</span>
      //                 </div>
      //               </div>
      //               <div className="typeOfFilm">2D Digital</div>
      //               <div className="timeSection">
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //               </div>
      //             </div>
      //             <div className="chooseTime">
      //               <div className="cinema-info">
      //                 <div className="cinema-img">
      //                   <img
      //                     src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-da-nang-15383885382313.jpg"
      //                     alt
      //                   />
      //                 </div>
      //                 <div className="info">
      //                   <span>Lotte - Đà Nẵng</span>
      //                   <span>Lotte Mart Đà Nẵng, Hải Châu, ĐN</span>
      //                 </div>
      //               </div>
      //               <div className="typeOfFilm">2D Digital</div>
      //               <div className="timeSection">
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //                 <div className="timeInDay">
      //                   <span className="time-start">09:30</span>
      //                   <p>~ 11:38</p>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      <div className="calendar">
        <div className="container">
          <div className="row ">
            <div
              className="col-4 nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {this.props.detail_movie.heThongRapChieu?.map(
                (heThongRapChieu, index) => {
                  let activeClass = index === 0 ? "active" : "";
                  return (
                    <a
                      key={index}
                      className={`nav-link ${activeClass}`}
                      id="v-pills-home-tab"
                      data-toggle="pill"
                      href={`#${heThongRapChieu.maHeThongRap}`}
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <div className="cinema">
                        <div className="logo-cinema">
                          <img src={heThongRapChieu.logo} alt />
                        </div>
                        <div className="cinema-name">
                          {heThongRapChieu.tenHeThongRap}
                        </div>
                      </div>
                    </a>
                  );
                }
              )}
            </div>
            <div className="col-8 tab-content" id="v-pills-tabContent">
              {/* <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-messages"
                role="tabpanel"
                aria-labelledby="v-pills-messages-tab"
              >
                ...
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-settings"
                role="tabpanel"
                aria-labelledby="v-pills-settings-tab"
              >
                ...
              </div> */}
              {this.props.detail_movie.heThongRapChieu?.map(
                (heThongRapChieu, index) => {
                  const activeClass = index === 0 ? "show active" : "";
                  return (
                    <div
                      className={`tab-pane fade ${activeClass} chooseCinema`}
                      id={`${heThongRapChieu.maHeThongRap}`}
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      {heThongRapChieu.cumRapChieu?.map((cumRap, index) => {
                        return (
                          <div className="chooseTime">
                            <div className="cinema-info">
                              <div className="cinema-img">
                                <img
                                  src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-da-nang-15383885382313.jpg"
                                  alt
                                />
                              </div>
                              <div className="info">
                                <span>{cumRap.tenCumRap}</span>
                                <span>{cumRap.maCumRap}</span>
                              </div>
                            </div>
                            <div className="typeOfFilm">2D Digital</div>
                            <div className="timeSection mt-3">
                              {/* <div className="timeInDay">
                                <span className="time-start">09:30</span>
                                <p>~ 11:38</p>
                              </div>
                              <div className="timeInDay">
                                <span className="time-start">09:30</span>
                                <p>~ 11:38</p>
                              </div>
                              <div className="timeInDay">
                                <span className="time-start">09:30</span>
                                <p>~ 11:38</p>
                              </div>
                              <div className="timeInDay">
                                <span className="time-start">09:30</span>
                                <p>~ 11:38</p>
                              </div>
                              <div className="timeInDay">
                                <span className="time-start">09:30</span>
                                <p>~ 11:38</p>
                              </div>
                              <div className="timeInDay">
                                <span className="time-start">09:30</span>
                                <p>~ 11:38</p>
                              </div> */}
                              {cumRap.lichChieuPhim
                                ?.slice(0, 8)
                                .map((lichChieu, index) => {
                                  return (
                                    <NavLink
                                      to={`/details/movie/${lichChieu.maLichChieu}/payment`}
                                    >
                                      <div className="timeInDay">
                                        <span className="time-start">
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("LT")}
                                        </span>
                                        {/* <p>~ 11:38</p> */}
                                      </div>
                                    </NavLink>
                                  );
                                })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
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
export default connect(mapStateToProps)(Calendar);
