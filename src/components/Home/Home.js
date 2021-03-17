import React, { Component } from 'react'
import Book_Ticket from '../Book-Ticket/Book_Ticket'
import Carousel from '../Carousel/Carousel'
import Film from '../Film_Manage/Film'
import Footer from '../Footer/Footer'
import HomeHeader from '../HomeHeader/HomeHeader'
import Loader from '../Loader/Loader'
import "./Home.scss"

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* loadpage  */}
             <Loader></Loader>
             <div className="home-container">
                 <HomeHeader></HomeHeader>
                 <Carousel></Carousel>
                 <Book_Ticket></Book_Ticket>
                 <Film></Film>
                 <Footer></Footer>
             </div>
            </div>
        )
    }
}
