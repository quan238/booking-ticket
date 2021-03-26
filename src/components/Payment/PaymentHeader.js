import React, { Component } from "react";
import "./PaymentHeader.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PaymentHeader extends Component {
  deleteStorgeUser = () => {
    // console.log("a")
    // var storedData = localStorage.getItem("credentials");
    localStorage.removeItem("credentials");
    window.location.reload();
  };
  render() {
    return (
      <div>
        <div>
          <nav className="stepChecking">
            <ul className="steps">
              <li>
                <a href="#" className="pr-5"  style={{  color: "#fa5639"}}>
                  01 CHỌN GHẾ VÀ THANH TOÁN
                </a>
              </li>
              <li>
                <a href="#">02 KẾT QUẢ ĐẶT VÉ</a>
              </li>
            </ul>
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
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inform: state.ConfirmUser.credentials,
  };
};
export default connect(mapStateToProps)(PaymentHeader);
