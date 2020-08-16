import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack, IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import { TiLocationOutline } from "react-icons/ti";
import { RiSendPlaneLine } from "react-icons/ri";

const WritePost = (props) => {
  let post = useRef("");
  return (
    <section className="write_post_container">
      <div className="write_post_subcontainer">
        <div className="header_section">
          <NavLink to="/feed" className="back_btn">
            <IoIosArrowBack />
          </NavLink>
          <div className="description"> Create New Post</div>
          <NavLink to="/feed" className="btn_close">
            <AiOutlineCloseCircle />
          </NavLink>
        </div>
        <textarea
          name="writePost"
          placeholder="Type here"
          maxLength="200"
          className="write_post"></textarea>
        <div className="input_container">
          <input
            type="text"
            placeholder="Add Caption"
            className="add_caption"
          />
          <GrEmoji className="icon" />
        </div>
        <div className="input_container">
          <input type="text" placeholder="Tag prople" className="tag_prople" />
          <IoMdAddCircleOutline className="icon" />
        </div>
        <div className="input_container">
          <input
            type="text"
            placeholder="Add Location"
            className="add_location"
          />
          <TiLocationOutline className="icon" />
        </div>
        <NavLink to="/feed" className="submit_post">
          {" "}
          <RiSendPlaneLine className="icon" />
          Post
        </NavLink>
      </div>
    </section>
  );
};

export default WritePost;
