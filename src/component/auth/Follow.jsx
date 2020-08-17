import React from "react";
import { connect } from "react-redux";

const Follow = (props) => {
  let image =
    "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png";

  return (
    <section className="follow_container">
      {props.data.map((singleData, i) => {
        return (
          <div className="single_follow" key={i}>
            <div className="single_follow_container">
              <img src={singleData.image ? singleData.image : image} alt="" />
              <h3 className="user_name">
                {" "}
                {singleData.username} <br />{" "}
                <small> Following : {singleData.following.length}</small>
              </h3>
            </div>
            <button className="follow_btn">
              {" "}
              {props.following.includes(singleData.id) ? "Following" : "Follow"}
            </button>
          </div>
        );
      })}
    </section>
  );
};

function mapStateToProps(state) {
  return {
    following: state.userInfo.userInfo.following,
  };
}
export default connect(mapStateToProps)(Follow);
