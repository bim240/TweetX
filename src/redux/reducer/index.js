import { combineReducers } from "redux";
import userReducer from "./userReducer";
import allUserList from "./getAllUserReducer";
import allFeed from "./feedReducer";

var rootReducer = combineReducers({
  userInfo: userReducer,
  allUserList,
  allFeed,
});

export default rootReducer;
