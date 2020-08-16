import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { withSnackbar } from "notistack";
import { connect } from "react-redux";

import verifySignupData from "../../utils/verifySignupData";
import { sendSignupRequest } from "../../redux/action/authAction";

const SignUp = (props) => {
  let email = useRef(null);
  let name = useRef(null);
  let password = useRef(null);
  let repassword = useRef(null);
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
  const handleSignupSubmit = () => {
    // console.log()
    let error = verifySignupData(
      name.current,
      email.current,
      password.current,
      repassword.current
    );
    if (error) {
      showNotification(error, "error");
      return;
    }
    let data = {
      name: name.current,
      email: email.current,
      password: password.current,
    };
    props.dispatch(sendSignupRequest(data, showNotification, props));
  };
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
      <input
        type="text"
        ref={name}
        onChange={(e) => handleInputChange(e, name)}
        placeholder="Name"
        name="name"
        className="name"
      />
      <input
        type="email"
        name="email"
        ref={email}
        onChange={(e) => handleInputChange(e, email)}
        placeholder="Email"
        className="email"
      />
      <input
        type="password"
        name="password"
        ref={password}
        onChange={(e) => handleInputChange(e, password)}
        placeholder="Password"
        className="password"
      />
      <input
        type="password"
        name="repassword"
        ref={repassword}
        onChange={(e) => handleInputChange(e, repassword)}
        placeholder="Confirm Password"
        className="confirm_password"
      />
      <p className="confirm_conditions">
        By Creating Account, you are automatically accepting all the{" "}
        <span> Trems & Conditons</span> related to Momento
      </p>
      <div className="last_section">
        <button className="btn_signup" onClick={handleSignupSubmit}>
          {" "}
          Sign up
        </button>
      </div>
    </section>
  );
};

export default withSnackbar(connect()(SignUp));
