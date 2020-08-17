import React, { useState, useEffect } from "react";
import { TiEdit } from "react-icons/ti";
import { RiUserFollowLine } from "react-icons/ri";
import { GiPentagramRose } from "react-icons/gi";
import WrittenPost from "./WrittenPost";
import Follow from "./Follow";
import { connect } from "react-redux";
import { getAllFollowerFollowing } from "../../redux/action/followerFollowingAction";

const Profile = (props) => {
  let [activeTab, setActiveTab] = useState("post");
  let { userInfo, allFollower, allFollowing } = props;
  let image =
    "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png";

  useEffect(() => {
    props.dispatch(getAllFollowerFollowing());
  }, []);
  return (
    <section className="profile_container">
      <div className="profile_sub_container">
        <div className="user_details_section">
          <img
            src={userInfo.image ? userInfo.image : image}
            className="user_image"
            alt=""
          />
          <div className="user_details">
            <h2 className="user_name"> {userInfo.username}</h2>
            <div className="follower_post_following">
              <span className="posts">
                Posts : {userInfo.articleIds && userInfo.articleIds.length}
              </span>
              <span className="followers">
                {" "}
                Followers :{" "}
                {(userInfo.followers && userInfo.followers.length) || 0}
              </span>
              <span className="following">
                {" "}
                Following : {userInfo.following && userInfo.following.length}
              </span>
            </div>
          </div>
        </div>
        <div className="current_tab">
          <div
            className="current_active_tab"
            onClick={() => setActiveTab("post")}>
            <TiEdit className="icon" /> Post
          </div>
          <div
            className="current_active_tab"
            onClick={() => setActiveTab("followers")}>
            <RiUserFollowLine className="icon" /> Followers
          </div>
          <div
            className="current_active_tab"
            onClick={() => setActiveTab("following")}>
            <GiPentagramRose className="icon" />
            Following
          </div>
        </div>
        {activeTab === "post" ? (
          <WrittenPost />
        ) : activeTab === "followers" ? (
          <Follow data={allFollower} />
        ) : (
          <Follow data={allFollowing} />
        )}
        {/* <WrittenPost /> */}
      </div>
    </section>
  );
};
function mapStateToProps(state) {
  return {
    userInfo: state.userInfo.userInfo,
    allFollower: state.allFollowerFollowing.allFollower,
    allFollowing: state.allFollowerFollowing.allFollowing,
  };
}

export default connect(mapStateToProps)(Profile);
