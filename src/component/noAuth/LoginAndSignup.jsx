import React from "react";
import { GiMountaintop } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const LoginAndSignup = (props) => {
  return (
    <section className="no_auth_container">
      <div className="no_auth_sub_container">
        <div className="logo_container">
          <GiMountaintop className="logo" />
        </div>
        <h1 className="tweetx">TweetX</h1>
        <p className="app_dispcription">
          TweetX is a social app that lets you share your moments with friends
        </p>
        <NavLink to="/login" className="btn_login">
          Login{" "}
        </NavLink>
        <NavLink to="/signup" className="link_signup">
          Create New Account
        </NavLink>
      </div>
    </section>
  );
};

export default LoginAndSignup;
