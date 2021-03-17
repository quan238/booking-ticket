import React, { Component } from "react";
import "./Film_Manage.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Slider from "react-slick";
// Import css files
// Import css files
export default class Film extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    };
    return (
      // film manage
      <div className="container mt-5">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="film_column">
            <div>
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
            <div>
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
          <div className="film_column">
            <div>
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
            <div>
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
          <div className="film_column">
            <div>
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
            <div>
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
          <div className="film_column">
            <div>
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
            <div>
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
        </Carousel>
      </div>
      //   <div className="container film_manage">
      //     <ul className="select_time">
      //       <li>
      //         <a
      //           data-toggle="tab"
      //           ng-click="initFilmUpComing()"
      //           data-target="#upComingFilms"
      //           aria-expanded="true"
      //         >
      //           <span>Đang Chiếu</span>
      //         </a>
      //       </li>
      //       <li>
      //         <a
      //           data-toggle="tab"
      //           ng-click="initFilmUpComing()"
      //           data-target="#upComingFilms"
      //           aria-expanded="true"
      //         >
      //           <span>Sắp Chiếu</span>
      //         </a>
      //       </li>
      //     </ul>
      //     <div className="film-slide">
      //       <div className="row slick-slide">
      //         <div className="col-lg-3">
      //           <div className="film-img">
      //             <img
      //               src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
      //               alt
      //             />
      //           </div>
      //           <div className="film_info">
      //             <p className="film_title">Film Title</p>
      //             <p className="film_time">Time</p>
      //           </div>
      //         </div>
      //         <div className="col-lg-3">
      //           <div className="film-img">
      //             <img
      //               src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
      //               alt
      //             />
      //           </div>
      //           <div className="film_info">
      //             <p className="film_title">Film Title</p>
      //             <p className="film_time">Time</p>
      //           </div>
      //         </div>
      //         <div className="col-lg-3">
      //           <div className="film-img">
      //             <img
      //               src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
      //               alt
      //             />
      //           </div>
      //           <div className="film_info">
      //             <p className="film_title">Film Title</p>
      //             <p className="film_time">Time</p>
      //           </div>
      //         </div>
      //         <div className="col-lg-3">
      //           <div className="film-img">
      //             <img
      //               src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
      //               alt
      //             />
      //           </div>
      //           <div className="film_info">
      //             <p className="film_title">Film Title</p>
      //             <p className="film_time">Time</p>
      //           </div>
      //         </div>
      //         <div className="col-lg-3">
      //           <div className="film-img">
      //             <img
      //               src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
      //               alt
      //             />
      //           </div>
      //           <div className="film_info">
      //             <p className="film_title">Film Title</p>
      //             <p className="film_time">Time</p>
      //           </div>
      //         </div>
      //         <div className="col-lg-3">
      //           <div className="film-img">
      //             <img
      //               src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
      //               alt
      //             />
      //           </div>
      //           <div className="film_info">
      //             <p className="film_title">Film Title</p>
      //             <p className="film_time">Time</p>
      //           </div>
      //         </div>
      //         <div className="col-lg-3">
      //           <div className="film-img">
      //             <img
      //               src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
      //               alt
      //             />
      //           </div>
      //           <div className="film_info">
      //             <p className="film_title">Film Title</p>
      //             <p className="film_time">Time</p>
      //           </div>
      //         </div>
      //         <div className="col-lg-3">
      //           <div className="film-img">
      //             <img
      //               src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_215x318.jpg"
      //               alt
      //             />
      //           </div>
      //           <div className="film_info">
      //             <p className="film_title">Film Title</p>
      //             <p className="film_time">Time</p>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
    );
  }
}
