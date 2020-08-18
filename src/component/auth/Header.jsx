import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import CheeseburgerMenu from "cheeseburger-menu";
import HamburgerMenu from "react-hamburger-menu";

import SideBar from "./SideBar";

const Header = (props) => {
  let [menuOpen, setMenuOpen] = useState(false);
  let headingName;

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleHeadingName = () => {
    let pathname = props.location.pathname.split("/");

    if (pathname[1] === "profile") {
      headingName = "You";
    } else if (pathname[1] === "feed") {
      headingName = "Feed";
    } else if (pathname[1] === "users") {
      headingName = "Users";
    }
  };
  handleHeadingName();

  return (
    <header className="header_container">
      <div className="header_sub_container1">
        <NavLink to="/feed" className="heading">
          TweetX
        </NavLink>
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
        <div>
          <CheeseburgerMenu isOpen={menuOpen} closeCallback={closeMenu}>
            <SideBar closeCallBack={closeMenu} />
          </CheeseburgerMenu>
          <HamburgerMenu
            isOpen={menuOpen}
            menuClicked={openMenu}
            width={25}
            height={18}
            strokeWidth={3}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
        </div>
        <div className="current_page"> {headingName}</div>
        <div className="search_icon">
          <AiOutlineSearch />{" "}
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
