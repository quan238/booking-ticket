import React, { Component } from "react";
import "./PaymentHeader.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PaymentHeader extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="stepChecking">
            <ul className="steps">
              <li>
                <a href="#" className="pr-5">
                  01 CHỌN GHẾ VÀ THANH TOÁN
                </a>
              </li>
              <li>
                <a href="#">02 KẾT QUẢ ĐẶT VÉ</a>
              </li>
            </ul>
            {this.props.inform ? (
              <div className="main-btn">
                <i class="fa fa-user-check"></i>
                <h4 style={{ margin: "0 10px" }}>
                  {this.props.inform.taiKhoan}
                </h4>
              </div>
            ) : (
              <div className="main-btn">
                <i className="fas fa-user-circle" />

                <Link to="/login">Đăng Nhập </Link>
                
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
