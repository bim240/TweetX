import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const SignUp = (props) => {
  return (
    <section className="signup_container">
      <NavLink to="/" className="back_btn">
        <IoIosArrowBack />
      </NavLink>
      <h1 className="tweetx">TweetX</h1>

      <NavLink to="/login" className="link_login_btn">
        Login
      </NavLink>
      <h3 className="heading">Create Account</h3>
      <p className="signup_discription">
        {" "}
        Fill in the required details and click Proceed.Fields marked * are
        mandatory
      </p>
      <input type="text" placeholder="Name" name="name" className="name" />
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
      <input
        type="password"
        name="repassword"
        placeholder="Confirm Password"
        className="confirm_password"
      />
      <p className="confirm_conditions">
        By Creating Account, you are automatically accepting all the{" "}
        <span> Trems & Conditons</span> related to Momento
      </p>
      <div className="last_section">
        <button className="btn_signup"> Sign up</button>
      </div>
    </section>
  );
};

export default SignUp;
