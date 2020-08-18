import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllUserList } from "../../redux/action/allUserListAction";
import { requestFollowUser } from "../../redux/action/userAction";

const Users = (props) => {
  let { allUserList, following } = props;
  let image =
    "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png";

  const handleFollowUser = (e, username, userid) => {
    console.log(e.target.textContent);
    if (e.target.textContent !== "Following") {
      props.dispatch(requestFollowUser(username, userid));
    }
  };

  useEffect(() => {
    props.dispatch(getAllUserList());
  }, []);

  return (
    <section className="users_container">
      <div className="users_sub_container">
        {allUserList.map((user, i) => {
          return (
            <div className="single_user" key={i}>
              <div className="single_user_container">
                <img src={user.image ? user.image : image} alt="" />
                <h3 className="user_name">
                  {user.username}
                  <br /> <small> Following : {user.following.length}</small>
                </h3>
              </div>
              <button
                className="follow_btn"
                onClick={(e) => handleFollowUser(e, user.username, user._id)}>
                {following && following.includes(user._id)
                  ? "Following"
                  : "Follow"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  return {
    allUserList: state.allUserList,
    following: state.userInfo.userInfo.following,
  };
}
export default connect(mapStateToProps)(Users);
