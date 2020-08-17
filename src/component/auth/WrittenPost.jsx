import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllPost } from "../../redux/action/userAction";
const WrittenPost = (props) => {
  let { posts, image, name } = props;
  let image1 =
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
                  <h6 className="time">10 min</h6>
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
  console.log(state.userInfo);
  return {
    image: state.userInfo.userInfo.image,
    name: state.userInfo.userInfo.username,
    posts: state.userInfo.posts,
  };
}
export default connect(mapStateToProps)(WrittenPost);
