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
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "signup user");
        if (res.user) {
          cb("Success", "success");
          props.history.push("/login");
          // console.log(res);
        } else {
          // dispatch({ type: "ADD_ERROR", error: res.err.body });
          console.log(res, "error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export { sendSignupRequest };
