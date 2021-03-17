import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid mt-5">
          <div className="download-section">
            <div className="color-overplay" />
            <div className="download-text">
              <div className="download-info">
                <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
                <br />
                <p>
                  Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                  và đổi quà hấp dẫn.
                </p>
              </div>
              <button
                className="download-btn mb-2 text-center text-light"
                style={{ backgroundColor: "#666666" }}
              >
                <i className="fab fa-apple p-1" />
                Download iOS
              </button>
              <br />
              <button
                className="download-btn text-center text-light"
                style={{ backgroundColor: "#00802b" }}
              >
                <i className="fab fa-android p-1" />
                Download Android
              </button>
            </div>
            <div className="download-phone">
              <div className="phoneimg">
                <img src="images/phone.jpg" alt width="220px" />
              </div>
            </div>
          </div>
          <div className="color-overlay" />
        </div>

        <footer>
          <div className="bot-container">
            <div className="info-bottom ">
              <div className="row">
                <div className="col-4 text-light">
                  <h6>About us</h6>
                  <ul>
                    <li>Phone: 911</li>
                    <li>Email: 1959037@itec.hcmus.edu.vn</li>
                    <li>Address: 227 Nguyen Van Cu, Ward 4, District 5 </li>
                    <li>Privacy Notice</li>
                  </ul>
                </div>
                <div className="col-4 text-light">
                  <h6>Partners</h6>
                  <img src="./img/cgv.png" alt />
                  <img src="./img/bhd.png" alt />
                  <img src="./img/cinestar.png" alt />
                  <img src="./img/galaxycine.png" alt />
                  <img src="./img/lotte.png" alt />
                </div>
                <div className="col-4 mcm text-light">
                  <div className="scm">
                    <h6>Mobile App</h6>
                    <div className="scm-icon">
                      <i className="fab fa-apple p-1" />
                      <i className="fab fa-android p-1" />
                    </div>
                  </div>
                  <div className="scm">
                    <h6>Social Media</h6>
                    <div className="scm-icon">
                      <img src="./img/facebook-logo.png" alt />
                      <img src="./img/twitter-logo.png" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-line">
              <hr />
            </div>
            <div className="itec-marker ">
              <div className="row">
                <div className="col-4  ">
                  <div className="log-itec">
                    <img src="./img/teamlogo.jpg" alt />
                  </div>
                </div>
                <div className="col-4  ">
                  <h6> Group Finall Project - Itec Clutch </h6>
                  <ul>
                    <li>Huỳnh Thiên Ân - 1959001</li>
                    <li>Phan Nguyễn Đức Trọng - 1959043</li>
                    <li>Đặng Minh Triết - 1959042</li>
                    <li>Nguyễn Sơn Thiện - 1959037</li>
                    <li>Trần Hồng Quân - 1959030</li>
                  </ul>
                </div>
                <div className="col-4">
                  <div className="bct">
                    <img src="./img/bct.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
