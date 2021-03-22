import React, { Component } from "react";
import "./RowChair.scss";
import { connect } from "react-redux";
import { GET_TICKET } from "../../actions/types";

class RowChair extends Component {
  renderChair = () => {
    return (
      this.props.row.Chair &&
      this.props.row.Chair.map((chair, index) => {
        let cssStatus = "";
        let numberDisplay =""
        // trang thai ghe da bi nguoi khac dat
        let disabled = false;
        if (chair.status) {
          cssStatus = "statusChair";
          disabled = true;
        }
        // xet trang thai ghe dang dat
        let cssChairBooked = "";
        let indexChairBooked = this.props.rowPurchased.findIndex(
          (gheDangDat) => gheDangDat.number === chair.number
          // && this.props.row.row === gheDangDat.row
        );
        if (indexChairBooked !== -1) {
          cssChairBooked = "chairBooked";
          numberDisplay ="numberDisplay"
        }
        return (
          <button

            onClick={() => {
              //   alert(chair.number);
              this.props.bookGhe(chair);
            }}
            disabled={disabled}
            style={{ display: "inline-block", padding: "15px" }}
            key={index}
            className={`chair-book ${cssStatus} ${cssChairBooked}`}
          >
            <div  className={`chairNum ${numberDisplay}`} style={{display: "none"}} >
              {chair.number}
            </div>
          </button>
        );
      })
    );
  };
  renderRowChair = () => {
    return (
      <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
        <div style={{margin: "0", padding: "0", width: "10px"}}>
          {this.props.row.row}
        </div>
           {this.renderChair()}
      </div>
    );
  };
  render() {
    return <div className="" style={{display: "flex", alignItems: "flex-start"}}>{this.renderRowChair()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    rowPurchased: state.getTicket.rowPurchased,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    bookGhe: (ghe) => {
      dispatch({
        type: GET_TICKET,
        ghe,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RowChair);
