import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllUserList } from "../../redux/action/allUserListAction";

const Users = (props) => {
  let { allUserList } = props;
  let image =
    "https://avatars2.githubusercontent.com/u/50172413?s=460&u=0573967b786828dda99a1efb64dff093fb654f08&v=4";
  let dummyData = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5];

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
              <button className="follow_btn"> Follow</button>
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
  };
}
export default connect(mapStateToProps)(Users);
