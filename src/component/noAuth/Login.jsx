import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { withSnackbar } from "notistack";
import { connect } from "react-redux";

import verifyLoginData from "../../utils/verifyLoginData";
import { sendLoginRequest } from "../../redux/action/authAction";

const Login = (props) => {
  let email = useRef(null);
  let password = useRef(null);
  let enqueueSnackbar = props.enqueueSnackbar;

  const showNotification = (text, varient) => {
    return enqueueSnackbar(text, {
      variant: varient,
      anchorOrigin: {
        vertical: "top",
        horizontal: "right",
      },
      autoHideDuration: 3000,
    });
  };
  const handleInputChange = (e, ref) => {
    ref.current = e.target.value;
  };
  const handleLoginSubmit = () => {
    // console.log()
    let error = verifyLoginData(email.current, password.current);
    if (error) {
      showNotification(error, "error");
      return;
    }
    let data = {
      email: email.current,
      password: password.current,
    };
    props.dispatch(sendLoginRequest(data, showNotification, props));
    props.history.push("/feed");
  };
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
        ref={email}
        onChange={(e) => handleInputChange(e, email)}
        placeholder="Email"
        className="email"
      />
      <input
        type="password"
        name="password"
        onChange={(e) => handleInputChange(e, password)}
        placeholder="Password"
        className="password"
      />
      <div className="last_section">
        <p className="forgot_password"> Forgot Password?</p>
        <button className="login" onClick={handleLoginSubmit}>
          {" "}
          Login
        </button>
      </div>
      <p className="reset_password"> Can't Sign In? Reset Password</p>
    </section>
  );
};

export default withSnackbar(connect()(Login));
