import { combineReducers } from "redux";
import userReducer from "./userReducer";
import allUserList from "./getAllUserReducer";

var rootReducer = combineReducers({
  userInfo: userReducer,
  allUserList,
});

export default rootReducer;
