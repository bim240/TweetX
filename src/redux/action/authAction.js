let url = "https://conduit-api357.herokuapp.com/api/v1/";
function sendSignupRequest(data, cb, props) {
  return function (dispatch) {
    fetch(`${url}users`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        user: {
          username: data.name,
          email: data.email,
          password: data.password,
          image: data.image,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.user) {
          cb("Success", "success");
          props.history.push("/login");
        } else {
          cb("Bad Request", "error");
        }
      })
      .catch((err) => {
        cb("Bad Request", "error");
      });
  };
}
function sendLoginRequest(data, cb, props) {
  return function (dispatch) {
    dispatch({ type: "USER_AUTH_IN_PROGRESS" });
    fetch(`${url}users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({
        user: {
          email: data.email,
          password: data.password,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.user) {
          cb("Success", "success");
          localStorage.setItem("jwt-token", res.user.token);
          dispatch({ type: "USER_AUTH_SUCCESS", payload: res.user });
          // props.history.push("/feed");
        } else {
          cb(res.error, "error");
        }
      })
      .catch((err) => {
        cb("Bad Request", "error");
      });
  };
}

export { sendSignupRequest, sendLoginRequest };
