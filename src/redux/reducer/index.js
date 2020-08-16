import { combineReducers } from "redux";
import userReducer from "./userReducer";

var rootReducer = combineReducers({
  userInfo: userReducer,
});

export default rootReducer;
