import React, { Component } from "react";
import "./Login.scss";
import { connect } from "react-redux";
import { getUser } from "../../actions/authenticationActions/getUser";
import { Form, Formik, Field } from "formik";
import { signInUser } from "../../actions/authenticationActions/ConfirmUser";
import { Link } from "react-router-dom";
class Login extends Component {

  componentDidMount() {
    this.props.dispatch(getUser());
    // console.log(this.props.user);
  }
  // getValueFromInput = (user) => {
  //   let email = document.getElementById("email").value;
  //   let password = document.getElementById("password").value;
  //   console.log("email", email);
  //   console.log("password", password);
  // };
  // handleChangeValue = (event) => {
  //   let { name, value } = event.target;
  //   console.log(value);
  //   // this.handleChangeValue(name, value);
  // };
  render() {
    // console.log(this.props.user);
    // let user;
    // let { email, password } = user;
    // this.getValueFromInput();
    return (
      // < Formik
      // initialValues={{
      //   taiKhoan: "",
      //   matKhau: "",
      // }}

      // onSubmit={(values) => {
      //   console.log(values)
      // }}
      // render={({handleChange}) => {

      //   <div className="login">
      //     <div className="color-overlay" />
      //     <div className="container_login">
      //       <h2 className="header" style={{ textAlign: "center" }}>
      //         Login
      //       </h2>
      //       <Form id="signInForm" className="signInForm_login">
      //         <div className="form-control_login">
      //           <Field
      //             id="email"
      //             type="email"
      //             name="taiKhoan"
      //             // placeholder="example@gmail.com"
      //             className="Email"
      //             onChange={handleChange}
      //           />
      //         </div>
      //         <div className="form-control_login">
      //           <Field
      //             id="password"
      //             type="password"
      //             placeholder={123456}
      //             className="Password"
      //             onChange={(event) => {
      //               this.handleChangeValue(event);
      //             }}
      //           />
      //         </div>
      //         <button>Sign In</button>
      //         <p style={{ paddingTop: "30px", marginBottom: "0" }}>
      //           Don't have the account? <a href="./signUp.html">Sign Up</a>
      //         </p>
      //       </Form>
      //     </div>
      //   </div>

      // }}/>

      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          this.props.dispatch(signInUser(values));
        }}
        render={({ handleChange }) => (
          <div className="login">
            <div className="color-overlay" />
            <div className="container_login">
              <h2 className="header" style={{ textAlign: "center" }}>
                Login
              </h2>
              <Form id="signInForm" className="signInForm_login">
                <div className="form-control_login">
                  <Field
                    id="email"
                    type="text"
                    name="taiKhoan"
                    placeholder="abcde"
                    className="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-control_login">
                  <Field
                    // id="password"
                    name="matKhau"
                    type="password"
                    placeholder={123456}
                    className="Password"
                    onChange={handleChange}
                  />
                </div>

                <button>Sign In</button>

                <p style={{ paddingTop: "30px", marginBottom: "0" }}>
                 Default account: abcde | 123456 {"  "}
                  <Link exact to="/signup">
                    Sign Up
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        )}
      ></Formik>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.getUser.user,

    // confirmUser: state.ConfirmUser.credentials,
  };
};

export default connect(mapStateToProps)(Login);

/* <div className="login">
          <div className="color-overlay" />
          <div className="container_login">
            <h2 className="header" style={{ textAlign: "center" }}>
              Login
            </h2>
            <form id="signInForm" className="signInForm_login">
              <div className="form-control_login">

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
        </div> */
