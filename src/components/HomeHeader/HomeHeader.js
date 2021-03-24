import React, { Component } from "react";
import "./HomeHeader.scss";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
class HomeHeader extends Component {
  render() {
    console.log(this.props.inform);
    return (
      <div>
        {/* Header Section */}
        <nav className="navigation">
          <div className="logo" style={{ width: "257.61px" }}>
            <a href="index.html"></a>
          </div>
          <a href="index.html">
            {/* <img src="/images/bieu-tuong-adidas.jpg" alt="" width="60px" /> */}
          </a>
          {/* Checkbox */}
          <input type="checkbox" className="menu-btn" id="menu-btn" />
          <label htmlFor="menu-btn" className="menu-icon">
            <span className="nav-icon" />
          </label>
          {/* Menu */}
          <ul className="menu">
            <li>
              <a href="#">Lịch chiếu</a>
            </li>
            <li>
              <a href="#">Cụm rạp</a>
            </li>
            <li>
              <a href="#">Tin tức</a>
            </li>
            <li>
              <a href="#">Ứng dụng</a>
            </li>
          </ul>
          {/* Account Button */}
          <div className="login_location">
            {this.props.inform ? (
              <div className="main-btn">
                <i class="fa fa-user-check"></i>
                <h4 style={{ margin: "0 10px" }}>
                  {this.props.inform.taiKhoan}
                </h4>
                <button className="btn btn-dark logoutbtn">Đăng Xuất</button>
              </div>
            ) : (
              <div className="main-btn">
                <i className="fas fa-user-circle" />

                <Link to="/login">Đăng Nhập</Link>
              
              </div>
            )}

            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Hồ Chí Minh
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Hà Nội
                </a>
                <a className="dropdown-item" href="#">
                  Đà Nẵng
                </a>
                <a className="dropdown-item" href="#">
                  Hải Phòng
                </a>
              </div>
            </div>
          </div>
          {/* hamburger */}
          <nav className="nav-2">
            {/* Menu */}
            <ul className="menu-2">
              <li>
                <div className="login-2">
                  <i className="fas fa-user-circle" />
                  <a href="./login.html">Đăng Nhập</a>
                </div>
              </li>
              <li>
                <a href="#">Lịch chiếu</a>
              </li>
              <li>
                <a href="#">Cụm rạp</a>
              </li>
              <li>
                <a href="#">Tin tức</a>
              </li>
              <li>
                <a href="#">Ứng dụng</a>
              </li>
            </ul>
            {/* <a href="/account_page.html" class="main-btn-ham">
      Account
      <i class="fa fa-chevron-right"></i>
    </a> */}
          </nav>
        </nav>
        {/* End Header Section */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inform: state.ConfirmUser.credentials,
  };
};
export default connect(mapStateToProps)(HomeHeader);
