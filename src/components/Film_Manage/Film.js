import React, { Component } from "react";
import "./Film_Manage.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getMovieAPI } from "../../actions/movieActions/GetMovie";
import { connect } from "react-redux";
import Slider from "react-slick";
import "../../../node_modules/react-multi-carousel/lib/styles.css";
import Async from "react-async";

// Import css files
// Import css files
class Film extends Component {
  // console.log(this.props.state)
  async componentDidMount() {
    await this.props.dispatch(getMovieAPI());
    console.log(this.props.movie);
  }

  render() {
    console.log(this.props.movie);
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
    const renderItem = () => {
      const { movie } = this.props;
      movie.map((item, index) => {
        console.log(item);
      });
    };
    return (
      // film manage

      <div className="container mt-5">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={1000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
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
          {/* {this.renderItem()} */}
          {/* {this.props.movie.map((item, index) => {
            console.log(item);
            return (
              <div className="film_column">
                <div>
                  <div className="film-img">
                    <img
                      src={` http://image.tmdb.org/t/p/w185//${item.poster_path}`}
                      alt
                    />
                  </div>
                  <div className="film_info">
                    <p className="film_title"> {item.original_title}</p>
                    <p className="film_time">{item.release_date}</p>
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
            );
          })} */}
        </Carousel>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movie: state.getMovie.result.results,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onGetMovie: () => {
//       dispatch(action.getMovieAPI());
//     },
//   };
// };
export default connect(mapStateToProps)(Film);
