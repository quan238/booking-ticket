import React, { Component } from "react";
import "./Cinema.css";
export default class Cinema extends Component {
  render() {
    return (
      <div>
        <div
          className="news  "
          style={{ marginBottom: "150px", marginTop: "100px" }}
        >
          <div className="container pb-5">
            <div className="row">
              <div className="col-1">
                <div className="logo-cinema">
                  <img src="./img/bhd.png" alt />
                </div>
                <div className="logo-cinema pt-5">
                  <img src="./img/galaxycine.png" alt />
                </div>
                <div className="logo-cinema pt-5">
                  <img src="./img/cgv.png" alt />
                </div>
                <div className="logo-cinema pt-5">
                  <img src="./img/lotte.png" alt />
                </div>
              </div>
              <div className="col-3">
                <div className="cinema-info">
                  <div className="cinema-img">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                      alt
                    />
                  </div>
                  <div className="cinema-location">
                    <p>BHD Star - Bitexco</p>
                    <p>L-3 Bitexco Icon 82</p>
                  </div>
                </div>
                <div className="cinema-info">
                  <div className="cinema-img">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                      alt
                    />
                  </div>
                  <div className="cinema-location">
                    <p>BHD Star - Bitexco</p>
                    <p>L-3 Bitexco Icon 82</p>
                  </div>
                </div>
                <div className="cinema-info">
                  <div className="cinema-img">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                      alt
                    />
                  </div>
                  <div className="cinema-location">
                    <p>BHD Star - Bitexco</p>
                    <p>L-3 Bitexco Icon 82</p>
                  </div>
                </div>
                <div className="cinema-info">
                  <div className="cinema-img">
                    <img
                      src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                      alt
                    />
                  </div>
                  <div className="cinema-location">
                    <p>BHD Star - Bitexco</p>
                    <p>L-3 Bitexco Icon 82</p>
                  </div>
                </div>
              </div>
              <div className="col-7">
                <div className="film">
                  <div className="film-img">
                    <img
                      src="https://s3img.vcdn.vn/mobile/123phim/2021/02/gai-gia-lam-chieu-v-nhung-cuoc-doi-vuong-gia-16141605727831_60x60.jpg"
                      alt
                    />
                  </div>
                  <div className="film-info">
                    <p>Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả</p>
                    <p>115 phút - TIX 7.1 - IMDb 0</p>
                  </div>
                </div>
                <div className="film">
                  <div className="film-img">
                    <img src="./img/BoGia_Teaser1.jpg" alt />
                  </div>
                  <div className="film-info">
                    <p>Bố già</p>
                    <p>128 phút - TIX 8.1 - IMDb 0</p>
                  </div>
                </div>
                <div className="film">
                  <div className="film-img">
                    <img
                      src="https://s3img.vcdn.vn/mobile/123phim/2021/03/chaos-walking-16157010055645_60x60.jpg"
                      alt
                    />
                  </div>
                  <div className="film-info">
                    <p>Hành Tinh Hỗn Loạn - Chaos Walking</p>
                    <p>109 phút - TIX 5.5 - IMDb 0</p>
                  </div>
                </div>
                <div className="film">
                  <div className="film-img">
                    <img
                      src="https://s3img.vcdn.vn/mobile/123phim/2021/03/harry-potter-va-bao-boi-tu-than-phan-1-16157915737675_60x60.jpg"
                      alt
                    />
                  </div>
                  <div className="film-info">
                    <p>Harry Potter và Bảo Bối Tử Thần</p>
                    <p>146 phút - TIX 8.3 - IMDb 0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
