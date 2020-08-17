import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPost } from "../../redux/action/userAction";
import { createTime } from "../../utils/createTime";
const WrittenPost = (props) => {
  let { posts, image, name } = props;
  let image1 =
    "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png";

  useEffect(() => {
    props.dispatch(getAllPost());
  }, []);
  return (
    <section className="written_post_container">
      {posts.map((post, i) => {
        return (
          <div className="single_feed" key={i}>
            <div className="feed_header_section">
              <div className="sender_details">
                <img
                  src={image ? image : image1}
                  className="sender_image"
                  alt="img"
                />
                <div className="sender_time_name">
                  <h5 className="sender_name">{name}</h5>
                  <h6 className="time">{createTime(post.createdAt)}</h6>
                </div>
              </div>
            </div>
            <div className="feed_body">{post.body}</div>
          </div>
        );
      })}
    </section>
  );
};

function mapStateToProps(state) {
  return {
    image: state.userInfo.userInfo.image,
    name: state.userInfo.userInfo.username,
    posts: state.userInfo.posts,
  };
}
export default connect(mapStateToProps)(WrittenPost);
