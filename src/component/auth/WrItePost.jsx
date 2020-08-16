import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
const WritePost = (props) => {
  return (
    <section className="write_post_container">
      <div className="write_post_subcontainer">
        <div className="header_section">
          <NavLink to="/feed" className="back_btn">
            <IoIosArrowBack />
          </NavLink>
          <div className="description"> Create New Post</div>
          <NavLink to="/feed">
            <AiOutlineCloseCircle />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default WritePost;
