import React from "react";
import "./PaymentDetails.scss"
export default function PaymentDetails() {
  return (
    <div>
      {/* Right Checkout */}
      <div className="rightCheckout">
        <div className="all-contents">
          <h1 className="price mt-3 mb-3">50.000 đ</h1>
          <div className="booking-info">
            <div className="cinema-info mb-3">
              <p>Film Title</p>
              <p>BHD - Vincom 3/2</p>
              <p className="time">Hôm nay 18/03/2021 - 22:05 - RẠP 3</p>
            </div>
            <div
              className="chair mb-3"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p className="chair-num" style={{ color: "#fb4226" }}>
                Ghế F13
              </p>
              <p style={{ color: "#44c020" }}>50.000 đ</p>
            </div>
            <div className="customer-info">
              <input type="email" placeholder="E-Mail" className="Email mb-3" />
              <input
                type="tel"
                placeholder="Phone"
                className="Telephone mb-3"
              />
              <div className="discount mb-3">
                <input type="text" placeholder="Mã giảm giá" />
                <button className="btn-apply"> Áp dụng</button>
              </div>
            </div>
            <div className="payment">
              <p className="mb-2">Hình thức thanh toán</p>
              <div className="paymentMethod">
                <input type="radio" name="payment" defaultValue="Visa" />
                <i className="fas fa-wallet pl-2 pr-2" />
                <label className="mb-0"> Visa, Master, JCB</label>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-order">Đặt Vé</button>
      </div>
      {/* End Right Checkout */}
    </div>
  );
}
