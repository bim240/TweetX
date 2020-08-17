import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { connect } from "react-redux";
import { getAllFeed } from "../../redux/action/feedAction";
import { createTime } from "../../utils/createTime";
const Feed = (props) => {
  let { feed } = props;
  let image =
    "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png";
  useEffect(() => {
    props.dispatch(getAllFeed());
  }, []);
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
        {feed.map((singleFeed, i) => {
          return (
            <div className="single_feed" key={i}>
              <div className="feed_header_section">
                <div className="sender_details">
                  <img
                    src={
                      singleFeed.author.image ? singleFeed.author.image : image
                    }
                    className="sender_image"
                    alt="img"
                  />
                  <div className="sender_time_name">
                    <h5 className="sender_name">
                      {singleFeed.author.username}
                    </h5>
                    <h6 className="time">{createTime(singleFeed.createdAt)}</h6>
                  </div>
                </div>
              </div>
              <div className="feed_body">{singleFeed.body}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    feed: state.allFeed,
  };
}
export default connect(mapStateToProps)(Feed);
