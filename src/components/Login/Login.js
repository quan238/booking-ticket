import React, { Component } from "react";
import "./Login.scss";
import { connect } from "react-redux";
import { getUser } from "../../actions/authenticationActions/getUser";
class Login extends Component {
  componentDidMount() {
    this.props.dispatch(getUser());
    console.log(this.props.user);
  }
  // getValueFromInput = (user) => {
  //   let email = document.getElementById("email").value;
  //   let password = document.getElementById("password").value;
  //   console.log("email", email);
  //   console.log("password", password);
  // };
  handleChangeValue = (event) => {
    let { name, value } = event.target;
    console.log(value);
    // this.handleChangeValue(name, value);
  };
  render() {
    // console.log(this.props.user);
    // let user;
    // let { email, password } = user;
    // this.getValueFromInput();
    return (
      <div className="login">
        <div className="color-overlay" />
        <div className="container_login">
          <h2 className="header">Firebase Web login</h2>
          <form id="signInForm" className="signInForm_login">
            <div className="form-control_login">
              {/* <label>Email</label> */}
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="Email"
                onChange={(event) => {
                  this.handleChangeValue(event);
                }}
              />
            </div>
            <div className="form-control_login">
              {/* <p>Password</p> */}
              <input
                id="password"
                type="password"
                placeholder={123456}
                className="Password"
                onChange={(event) => {
                  this.handleChangeValue(event);
                }}
              />
            </div>
            <button>Sign In</button>
            <p style={{ paddingTop: "30px", marginBottom: "0" }}>
              Don't have the account? <a href="./signUp.html">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.getUser.user,
  };
};

export default connect(mapStateToProps)(Login);
