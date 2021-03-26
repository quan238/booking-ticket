import React, { Component } from "react";
import "./HomeHeader.scss";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import youtube from "../App/assets/img/youtube-logo-2020.svg";
import ReactLogo from '../../logo.svg';
import facebook from "../App/assets/img/facebook-logo@logotyp.us.svg"
class HomeHeader extends Component {
  deleteStorgeUser = () => {
    // console.log("a")
    // var storedData = localStorage.getItem("credentials");
    localStorage.removeItem("credentials");
    window.location.reload();
  };
  render() {
    // console.log(this.props.inform);

    return (
      <div>
        {/* Header Section */}
        <nav className="navigation">
          <div className="logo" style={{ width: "257.61px" }}>
            <NavLink to="/" extact>
              <img src={youtube} alt=""  />
            </NavLink>
          </div>
          <a href="index.html"></a>
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
              <div className="main-btn" style={{ color: "#9b9b9b" }}>
                <i
                  className="fas fa-user-circle"
                  style={{ color: "#dbdee3", fontSize: "36px" }}
                />
                <h4
                  style={{
                    margin: "0 10px",
                    fontSize: "18px",
                    margin: "0px 8px",
                  }}
                >
                  {this.props.inform.taiKhoan}
                </h4>
                <button
                  className="btn btn-dark logoutbtn"
                  onClick={this.deleteStorgeUser}
                >
                  Đăng Xuất
                </button>
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
