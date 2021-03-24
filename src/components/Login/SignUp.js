import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          //   this.props.dispatch(signInUser(values));
        }}
        render={({ handleChange }) => (
          <div className="login">
            <div className="color-overlay" />
            <div className="container_login">
              <h2 className="header" style={{ textAlign: "center" }}>
                Create Account
              </h2>
              <Form id="signInForm" className="signInForm_login">
                <div className="form-control_login">
                  <Field
                    id="email"
                    type="text"
                    name="taiKhoan"
                    placeholder="example@gmail.com"
                    className="Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-control_login">
                  <Field
                    id="email"
                    type="text"
                    name="taiKhoan"
                    placeholder="example@gmail.com"
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
                <Link>
                  <button className="mb-3">Sign In</button>
                </Link>
              </Form>
            </div>
          </div>
        )}
      ></Formik>
    </div>
  );
}
