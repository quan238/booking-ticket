import React, { Component } from "react";
import "./Login.scss";
export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="color-overlay" />
        <div className="container_login">
          <h2 className="header">Firebase Web login</h2>
          <form id="signInForm" className="signInForm_login">
            <div className="form-control_login">
              {/* <label>Email</label> */}
              <input
                type="email"
                placeholder="example@gmail.com"
                className="Email"
              />
            </div>
            <div className="form-control_login">
              {/* <p>Password</p> */}
              <input
                type="password"
                placeholder={123456}
                className="Password"
              />
            </div>
            <button>Sign In</button>
            <p style={{paddingTop:"30px",marginBottom:"0"}}>
              Don't have the account? <a href="./signUp.html">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
