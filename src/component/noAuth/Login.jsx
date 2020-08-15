import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Login = (props) => {
  return (
    <section className="login_container">
      <NavLink to="/" className="back_btn">
        <IoIosArrowBack />
      </NavLink>
      <h1 className="tweetx">TweetX</h1>
      <NavLink to="/signup" className="link_signup_btn">
        Create Account
      </NavLink>
      <h3 className="heading">Login</h3>
      <p className="login_discription">
        {" "}
        Type in your Email ID and password you chose for Momento and click Go to
        feed
      </p>
      <div className="form_section"></div>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="email"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="password"
      />
      <div className="last_section">
        <p className="forgot_password"> Forgot Password?</p>
        <button className="login"> Login</button>
      </div>
      <p className="reset_password"> Can't Sign In? Reset Password</p>
    </section>
  );
};

export default Login;
