let url = "https://conduit-api357.herokuapp.com/api/v1/";
function getUserInfo(Redirect) {
  return function (dispatch) {
    dispatch({ type: "USER_AUTH_IN_PROGRESS" });
    fetch(`${url}user`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["jwt-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.user) {
          dispatch({ type: "USER_AUTH_SUCCESS", payload: res.user });
          Redirect("/feed");
        } else {
          dispatch({ type: "USER_AUTH_FAILED" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export { getUserInfo };
