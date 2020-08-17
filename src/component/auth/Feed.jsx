import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { connect } from "react-redux";
import { getAllPost } from "../../redux/action/userAction";
const Feed = (props) => {
  let { posts, image, name } = props;

  let dummyData = [
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
    { image, text: "hello testing", name: "bim" },
  ];
  useEffect(() => {
    props.dispatch(getAllPost());
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
        {posts.map((post, i) => {
          return (
            <div className="single_feed" key={i}>
              <div className="feed_header_section">
                <div className="sender_details">
                  <img src={image} className="sender_image" alt="img" />
                  <div className="sender_time_name">
                    <h5 className="sender_name">{name}</h5>
                    <h6 className="time">10 min</h6>
                  </div>
                </div>
              </div>
              <div className="feed_body">{post.body}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  console.log(state.userInfo);
  return {
    image: state.userInfo.userInfo.image,
    name: state.userInfo.userInfo.username,
    posts: state.userInfo.posts,
    // state1: state,
  };
}
export default connect(mapStateToProps)(Feed);
