import React, { useState } from "react";
import { TiEdit } from "react-icons/ti";
import { RiUserFollowLine } from "react-icons/ri";
import { GiPentagramRose } from "react-icons/gi";
import WrittenPost from "./WrittenPost";
import Follow from "./Follow";

const Profile = (props) => {
  let [activeTab, setActiveTab] = useState("post");
  let image =
    "https://avatars2.githubusercontent.com/u/50172413?s=460&u=0573967b786828dda99a1efb64dff093fb654f08&v=4";

  return (
    <section className="profile_container">
      <div className="profile_sub_container">
        <div className="user_details_section">
          <img src={image} className="user_image" alt="" />
          <div className="user_details">
            <h2 className="user_name"> Bimlendu Kumar</h2>
            <div className="follower_post_following">
              <span className="posts">Posts : 511</span>
              <span className="followers"> Followers : 511</span>
              <span className="following"> Following : 511</span>
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
          <Follow text={"followers"} />
        ) : (
          <Follow text={"followers"} />
        )}
        {/* <WrittenPost /> */}
      </div>
    </section>
  );
};

export default Profile;
