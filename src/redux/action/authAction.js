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
        } else {
          cb("Bad Request", "error");
        }
      })
      .catch((err) => {
        cb("Bad Request", "error");
      });
  };
}

export { sendSignupRequest };
