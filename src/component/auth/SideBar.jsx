import React from "react";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { BsNewspaper } from "react-icons/bs";
import { connect } from "react-redux";

const SideBar = (props) => {
  let { image, username, email } = props.userInfo;
  let image1 =
    "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png";

  return (
    // Pass on our props
    <div className="menu">
      <div className="user_info">
        <img src={image ? image : image1} alt="img" />
        <div className="name_email">
          <h2 className="name"> {username}</h2>
          <p className="email">{email}</p>
        </div>
      </div>
      <Link className="menu-item" onClick={props.closeCallBack} to="/profile">
        <FaRegUser className="icon" />
        My Profile
      </Link>
      <Link className="menu-item" onClick={props.closeCallBack} to="/feed">
        <BsNewspaper className="icon" />
        Feed
      </Link>

      <Link className="menu-item" onClick={props.closeCallBack} to="/users">
        {" "}
        <IoIosList className="icon" />
        User List
      </Link>

      <Link
        className="menu-item"
        to="/"
        onClick={() => {
          localStorage.clear();
          props.closeCallBack();
          window.location.reload();
        }}>
        <GrLogout className="icon" />
        Sign Out
      </Link>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo.userInfo,
  };
}
export default connect(mapStateToProps)(SideBar);
