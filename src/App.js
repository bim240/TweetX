import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import LoginAndSignup from "./component/noAuth/LoginAndSignup";
import Login from "./component/noAuth/Login";
import SignUp from "./component/noAuth/SignUp";
import { getUserInfo } from "./redux/action/userAction";
import Header from "./component/auth/Header";

function App(props) {
  useEffect(() => {
    if (localStorage["jwt-token"]) {
      props.dispatch(getUserInfo());
    }
  }, []);
  let { userInfo, isAuthInProgress } = props;
  console.log(userInfo, isAuthInProgress);
  return (
    <div className="App">
      {userInfo ? (
        <>
          <Header />
          <Switch>
            <Route exact path="/feed" component={LoginAndSignup} />
            <Route path="/users" component={Login} />
            <Route path="/profile" component={SignUp} />
            <Route path="*" component={LoginAndSignup} />
          </Switch>
        </>
      ) : userInfo && isAuthInProgress ? (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="*" component={LoginAndSignup} />
        </Switch>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  // console.log(state.userInfo, "state");
  return {
    userInfo: state.userInfo.userInfo,
    isAuthInProgress: state.userInfo.isAuthInProgress,
  };
}
export default connect(mapStateToProps)(App);
