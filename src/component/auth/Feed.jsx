import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
const Feed = (props) => {
  let image =
    "https://avatars2.githubusercontent.com/u/50172413?s=460&u=0573967b786828dda99a1efb64dff093fb654f08&v=4";
  let dummyData = [
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
  ];
  return (
    <section className="feed_Container">
      <NavLink className="new_post_icon" to="/writepost">
        <FaRegEdit className="icon" />
      </NavLink>
      <div className="feed_sub_container">
        <NavLink to="/writepost" className="write_new_post">
          {" "}
          Write
        </NavLink>
        {dummyData.map((feed, i) => {
          return (
            <div className="single_feed" key={i}>
              <div className="feed_header_section">
                <div className="sender_details">
                  <img src={feed.image} className="sender_image" alt="img" />
                  <div className="sender_time_name">
                    <h5 className="sender_name">{feed.name}</h5>
                    <h6 className="time">10 min</h6>
                  </div>
                </div>
              </div>
              <div className="feed_body">{feed.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Feed;
