import React from "react";
import "./PaymentHeader.scss"
export default function PaymentHeader() {
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
          <div className="main-btn">
            <i className="fas fa-user-circle" />
            <a href="./login.html">Đăng Nhập</a>
          </div>
        </nav>
      </div>
    </div>
  );
}
