import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginAndSignup from "./component/noAuth/LoginAndSignup";
import Login from "./component/noAuth/Login";
import SignUp from "./component/noAuth/SignUp";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LoginAndSignup} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
