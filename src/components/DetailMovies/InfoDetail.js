import React, { Component } from 'react'
import "./InfoDetail.css"
export default class InfoDetail extends Component {
    // constructor(){}
    render() {

        
        return (
            <div className="detailInfo ">
                <div className="container ">
                    <div className="row isFlex detailMainStyle ">
                        <div className="col-sm-6 col-xs-12 film left">
                            <div className="row rowLeftInfo">
                                <p className="contentTitle">Ngày công chiếu</p>
                                <p className="contentInfo ng-binding">12.03.2021</p>
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
                                <p className="contentInfoFull description ng-binding" />
                            </div>
                            <div className="row rowLeftInfo">
                                <p className="contentInfoFull" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
