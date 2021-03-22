import React, { Component } from "react";
import "./Footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="">
        <footer>
          <div className="bot-container">
            <div className="info-bottom ">
              <div className="row mt-4">
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
          </div>
        </footer>
      </div>
    );
  }
}
