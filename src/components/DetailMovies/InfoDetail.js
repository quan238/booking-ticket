import React, { Component } from "react";
import { connect } from "react-redux";
import "./InfoDetail.css";
import moment from "moment"
class InfoDetail extends Component {
  // constructor(){}
  render() {
    return (
      <div className="detailInfo ">
        <div className="container ">
          <div className="row isFlex detailMainStyle ">
            <div className="col-sm-6 col-xs-12 film left">
              <div className="row rowLeftInfo">
                <p className="contentTitle">Ngày công chiếu</p>
                <p className="contentInfo ng-binding">
                  {
                    moment(this.props.detail_movie.ngayKhoiChieu).format("LL") // March 27, 2021
                  }
                </p>
              </div>
              <div className="row rowLeftInfo">
                <p className="contentTitle">Đạo diễn</p>
                <p className="contentInfo ng-binding"></p>
              </div>
              <div className="row rowLeftInfo">
                <p className="contentTitle">Diễn viên</p>
                <p className="contentInfo ng-binding">Tuấn Trần, Trấn Thành</p>
              </div>
              <div className="row rowLeftInfo">
                <p className="contentTitle">Thể Loại</p>
                <p className="contentInfo ng-binding" />
              </div>
              <div className="row rowLeftInfo">
                <p className="contentTitle">Định dạng</p>
                <p className="contentInfo ng-binding" />
              </div>
              <div className="row rowLeftInfo">
                <p className="contentTitle">Quốc Gia SX</p>
                <p className="contentInfo ng-binding">Việt Nam</p>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12 film right">
              <div className="row rowLeftInfo">
                <p className="contentTitle">Nội dung</p>
              </div>
              <div className="row rowLeftInfo">
                <p className="contentInfoFull description ng-binding">
                  {this.props.detail_movie.moTa}
                </p>
              </div>
              <div className="row rowLeftInfo">
                <p className="contentInfoFull" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detail_movie: state.getDetailMovie.result,
  };
};
// const mapDispatchToProps = (dispatch) => {};
export default connect(mapStateToProps)(InfoDetail);
