import React, { Component } from "react";
import "./BookTicket.scss";

export default class Book_Ticket extends Component {
  render() {
    return (
     
        <div className="container book-ticket">
          <div className="catogory">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Phim
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Gái Già Lắm Chiêu V - Những Cuộc Đời Vương Giả
                </a>
                <a className="dropdown-item" href="#">
                  Bố Già
                </a>
                <a className="dropdown-item" href="#">
                  Raya and the Last Dragon
                </a>
                <a className="dropdown-item" href="#">
                  Tom &amp; Jerry
                </a>
                <a className="dropdown-item" href="#">
                  Godzilla vs. Kong
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Rạp
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Vui lòng chọn phim
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Ngày xem
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Vui lòng chọn phim và rạp
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Suất chiếu
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Vui lòng chọn phim, rạp và ngày xem
                </a>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              style={{ fontSize: 14 }}
            >
              MUA VÉ NGAY
            </button>
          </div>
        </div>
      
    );
  }
}
