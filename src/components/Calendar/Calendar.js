import React, { Component } from 'react'
import "./Calendar.css"
export default class Calendar extends Component {
    render() {
        return (
            <div className="calendar ">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="cinema">
                                <div className="logo-cinema">
                                    <img src="./img/lotte.png" alt />
                                </div>
                                <div className="cinema-name">Lotte Cinema</div>
                            </div>
                            <div className="cinema">
                                <div className="logo-cinema">
                                    <img src="./img/lotte.png" alt />
                                </div>
                                <div className="cinema-name">Lotte Cinema</div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="dayOfWeek">
                                <div className="days">
                                    <div className="selectedDay">
                                        <p>Thứ 5</p>
                                        <p>25</p>
                                    </div>
                                    <div className="selectedDay">
                                        <p>Thứ 5</p>
                                        <p>25</p>
                                    </div>
                                    <div className="selectedDay">
                                        <p>Thứ 5</p>
                                        <p>25</p>
                                    </div>
                                    <div className="selectedDay">
                                        <p>Thứ 5</p>
                                        <p>25</p>
                                    </div>
                                    <div className="selectedDay">
                                        <p>Thứ 5</p>
                                        <p>25</p>
                                    </div>
                                    <div className="selectedDay">
                                        <p>Thứ 5</p>
                                        <p>25</p>
                                    </div>
                                    <div className="selectedDay">
                                        <p>Thứ 5</p>
                                        <p>25</p>
                                    </div>
                                    <div className="selectedDay">
                                        <p>Thứ 5</p>
                                        <p>25</p>
                                    </div>
                                    <div className="selectedDay">
                                        <p>Thứ 5</p>
                                        <p>25</p>
                                    </div>
                                    <div className="selectedDay">
                                        <p>Thứ 5</p>
                                        <p>25</p>
                                    </div>
                                    <div className="selectedDay">
                                        <p>Thứ 5</p>
                                        <p>25</p>
                                    </div>
                                </div>
                            </div>
                            <div className="chooseTime">
                                <div className="cinema-info">
                                    <div className="cinema-img">
                                        <img src="https://s3img.vcdn.vn/123phim/2018/10/lotte-cinema-da-nang-15383885382313.jpg" alt />
                                    </div>
                                    <div className="info">
                                        <span>Lotte - Đà Nẵng</span>
                                        <span>Lotte Mart Đà Nẵng, Hải Châu, ĐN</span>
                                    </div>
                                </div>
                                <div className="typeOfFilm">2D Digital</div>
                                <div className="timeSection">
                                    <div className="timeInDay">
                                        <span className="time-start">09:30</span>
                                        <p>~ 11:38</p>
                                    </div>
                                    <div className="timeInDay">
                                        <span className="time-start">09:30</span>
                                        <p>~ 11:38</p>
                                    </div>
                                    <div className="timeInDay">
                                        <span className="time-start">09:30</span>
                                        <p>~ 11:38</p>
                                    </div>
                                    <div className="timeInDay">
                                        <span className="time-start">09:30</span>
                                        <p>~ 11:38</p>
                                    </div>
                                    <div className="timeInDay">
                                        <span className="time-start">09:30</span>
                                        <p>~ 11:38</p>
                                    </div>
                                    <div className="timeInDay">
                                        <span className="time-start">09:30</span>
                                        <p>~ 11:38</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
