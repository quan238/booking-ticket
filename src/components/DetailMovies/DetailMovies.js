import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
class DetailMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>
        <Loader></Loader>
        {/* <h1>af</h1> */}
       
    </div>;
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {

};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovies);
