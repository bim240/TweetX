import React from "react";
import { slide as Menu } from "react-burger-menu";
import { FaRegUser } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { GrLogout } from "react-icons/gr";

export default (props) => {
  let image =
    "https://avatars2.githubusercontent.com/u/50172413?s=460&u=0573967b786828dda99a1efb64dff093fb654f08&v=4";
  return (
    // Pass on our props
    <Menu {...props}>
      <div className="user_info">
        <img src={image} alt="image" />
        <div className="name_email">
          <h2 className="name"> Bimlendu Kumar</h2>
          <p className="email">bimlendu357@gmail.com</p>
        </div>
      </div>
      <a className="menu-item" href="/profile">
        <FaRegUser className="icon" />
        My Profile
      </a>

      <a className="menu-item" href="/users">
        {" "}
        <IoIosList className="icon" />
        User List
      </a>

      <a className="menu-item" href="/" onClick={() => localStorage.clear()}>
        <GrLogout className="icon" />
        Sign Out
      </a>
    </Menu>
  );
};
