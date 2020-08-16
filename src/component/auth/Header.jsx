import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

import SideBar from "./SideBar";

const Header = (props) => {
  return (
    <header className="header_container">
      <div className="header_sub_container1">
        <h1 className="heading">TweetX</h1>
        <nav className="nav_container">
          <NavLink
            activeClassName="active_route"
            className="nav_link"
            to="/feed">
            Feed
          </NavLink>
          <NavLink
            activeClassName="active_route"
            className="nav_link"
            to="/users">
            Users
          </NavLink>
          <NavLink
            activeClassName="active_route"
            className="nav_link"
            to="/profile">
            Profile
          </NavLink>
        </nav>
      </div>
      <div className="header_sub_conatiner2" id="ham">
        <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        <div id="page-wrap"></div>
        <div className="current_page"> My Feed</div>
        <div className="search_icon">
          <AiOutlineSearch />{" "}
        </div>
      </div>
    </header>
  );
};

export default Header;
