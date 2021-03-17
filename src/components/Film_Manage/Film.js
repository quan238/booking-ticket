import React, { Component } from "react";
import "./Film_Manage.scss"
export default class Film extends Component {
  render() {
    return (
    // film manage
        <div className="container film_manage">
          <ul className="select_time">
            <li>
              <a
                data-toggle="tab"
                ng-click="initFilmUpComing()"
                data-target="#upComingFilms"
                aria-expanded="true"
              >
                <span>Đang Chiếu</span>
              </a>
            </li>
            <li>
              <a
                data-toggle="tab"
                ng-click="initFilmUpComing()"
                data-target="#upComingFilms"
                aria-expanded="true"
              >
                <span>Sắp Chiếu</span>
              </a>
            </li>
          </ul>
          <div className="film-slide">
            <div className="row slick-slide">
              <div className="col-lg-3">
                <div className="film-img">
                  <img
                    src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
                    alt
                  />
                </div>
                <div className="film_info">
                  <p className="film_title">Film Title</p>
                  <p className="film_time">Time</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="film-img">
                  <img
                    src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
                    alt
                  />
                </div>
                <div className="film_info">
                  <p className="film_title">Film Title</p>
                  <p className="film_time">Time</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="film-img">
                  <img
                    src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
                    alt
                  />
                </div>
                <div className="film_info">
                  <p className="film_title">Film Title</p>
                  <p className="film_time">Time</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="film-img">
                  <img
                    src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
                    alt
                  />
                </div>
                <div className="film_info">
                  <p className="film_title">Film Title</p>
                  <p className="film_time">Time</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="film-img">
                  <img
                    src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
                    alt
                  />
                </div>
                <div className="film_info">
                  <p className="film_title">Film Title</p>
                  <p className="film_time">Time</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="film-img">
                  <img
                    src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
                    alt
                  />
                </div>
                <div className="film_info">
                  <p className="film_title">Film Title</p>
                  <p className="film_time">Time</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="film-img">
                  <img
                    src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
                    alt
                  />
                </div>
                <div className="film_info">
                  <p className="film_title">Film Title</p>
                  <p className="film_time">Time</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="film-img">
                  <img
                    src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
                    alt
                  />
                </div>
                <div className="film_info">
                  <p className="film_title">Film Title</p>
                  <p className="film_time">Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}
