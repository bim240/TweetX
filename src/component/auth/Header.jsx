import React from "react";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  return (
    <header className="header_container">
      <h1 className="heading"></h1>
      <nav className="nav_container">
        <NavLink to="feed">Feed</NavLink>
        <NavLink to="users">Users</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </nav>
    </header>
  );
};

export default Header;
