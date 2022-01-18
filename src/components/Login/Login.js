import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LinkedInLogo } from "./linkedin-logo.svg";
import { ReactComponent as OTPlogo } from "./otp.svg";
import { ReactComponent as AppleLogo } from "./apple.svg";
import { ReactComponent as FooterLogo } from "./footer-logo.svg";
import { useFormik } from "formik";
// import InputField from "../inputField/InputField";
import { validate } from "../Utility";
import "./login.css";

function Login() {
  let navigate = useNavigate();
  const user = {
    email: "admin@gmail.com",
    password: "admin",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Values", values);
      console.log("User", user);
      if (JSON.stringify(user) === JSON.stringify(values)) {
        console.log("Done");
        navigate("/home");
      } else {
        console.log("Not Done");
        navigate("/");
      //  window.alert("Password or Email not Matched!!")
      }
    },
  });

  return (
    <div className="app-container">
      <div className="main-header-section">
        <a href="/" className="linkedin-logo">
          <div className="logo-class">
            <LinkedInLogo />
          </div>
        </a>
      </div>
      <div className="main-content">
        <div className="card-layout">
          <div className="organic-div">
            <div className="header-content">
              <h1 className="header-content-heading">Sign in</h1>
              <p className="header-content-sub-heading">
                Stay updated on your professional world
              </p>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="form-section">
                <div className="your-input">
                  <input
                    name="email"
                    type="text"
                    className="input"
                    placeholder="Enter Email or Phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="errorText">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="your-input">
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Enter Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="errorText">{formik.errors.password}</div>
                  ) : null}
                </div>

                <div className="forgot-password">
                  <a href="/" className="forgot-password-link">
                    {" "}
                    Forgot password?{" "}
                  </a>
                </div>
                <div className="signup-button">
                  <button className="button-1" type="submit">
                    Sign in
                  </button>
                </div>
              </div>
            </form>

            <div className="alternative-signin-container">
              <div className="or-separator">
                <div className="before"></div>
                <p className="or-text">or</p>
                <div className="after"></div>
              </div>
              <div className="sign-otp">
                <button className="button-alternative">
                  <div className="or-login-button">
                    <OTPlogo />
                    <span className="or-login-button-text">
                      Sign in with OTP
                    </span>
                  </div>
                </button>
              </div>
              <div className="sign-apple">
                <button className="button-alternative">
                  <div className="or-login-button">
                    <AppleLogo />
                    <span className="or-login-button-text">
                      Sign in with Apple
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="join-now">
          <h3>
            Need to LinkedIn? <span>Join Now</span>
          </h3>
        </div>
      </div>
      <footer className="footer-base">
        <div className="footer_base_wrapper">
          <p className="copyright">
            {" "}
            <FooterLogo /> © 2022
          </p>
          <div className="footer-right-side">
            <ul className="footer_nav_list">
              <li>
                <a href="/" className="nav_list_a_tag">
                  {" "}
                  User Agreement{" "}
                </a>
              </li>
              <li>
                <a href="/" className="nav_list_a_tag">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
              <li>
                <a href="/" className="nav_list_a_tag">
                  {" "}
                  Community Guidelines{" "}
                </a>
              </li>
              <li>
                <a href="/" className="nav_list_a_tag">
                  {" "}
                  Cookie Policy{" "}
                </a>
              </li>
              <li>
                <a href="/" className="nav_list_a_tag">
                  {" "}
                  Copyright Policy{" "}
                </a>
              </li>
              <li>
                <a href="/" className="nav_list_a_tag">
                  {" "}
                  Send Feedback{" "}
                </a>
              </li>
              <li>
                <a href="/" className="nav_list_a_tag">
                  {" "}
                  Language{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Login;
