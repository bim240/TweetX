import { combineReducers } from "redux";
import userReducer from "./userReducer";
import allUserList from "./getAllUserReducer";
import allFeed from "./feedReducer";
import allFollowerFollowing from "./followerFollowingReducer";

var rootReducer = combineReducers({
  userInfo: userReducer,
  allUserList,
  allFeed,
  allFollowerFollowing,
});

export default rootReducer;
