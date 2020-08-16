import React from "react";
import { slide as Menu } from "react-burger-menu";
import { FaRegUser } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { GrLogout } from "react-icons/gr";
import { BsNewspaper } from "react-icons/bs";
import { withRouter } from "react-router-dom";

import { Redirect } from "react-router-dom";

const SideBar = (props) => {
  let image =
    "https://avatars2.githubusercontent.com/u/50172413?s=460&u=0573967b786828dda99a1efb64dff093fb654f08&v=4";

  const handleRouteChange = (e) => {
    // e.preventDefault();
    // let route = e.target.href.split("/").slice(-1);
    // console.log();
    // console.log(`/${route[0]}`);
    // props.history.push(e.target.href);
    // console.log(props);
  };
  return (
    // Pass on our props
    <Menu {...props}>
      <div className="user_info">
        <img src={image} alt="img" />
        <div className="name_email">
          <h2 className="name"> Bimlendu Kumar</h2>
          <p className="email">bimlendu357@gmail.com</p>
        </div>
      </div>
      <a
        className="menu-item"
        onClick={(e) => handleRouteChange(e)}
        href="/profile">
        <FaRegUser className="icon" />
        My Profile
      </a>
      <a
        className="menu-item"
        onClick={(e) => handleRouteChange(e)}
        href="/profile">
        <BsNewspaper className="icon" />
        Feed
      </a>

      <a
        className="menu-item"
        onClick={(e) => handleRouteChange(e)}
        href="/users">
        {" "}
        <IoIosList className="icon" />
        User List
      </a>

      <a
        className="menu-item"
        onClick={(e) => handleRouteChange(e)}
        href="/"
        onClick={() => localStorage.clear()}>
        <GrLogout className="icon" />
        Sign Out
      </a>
    </Menu>
  );
};

export default withRouter(SideBar);
