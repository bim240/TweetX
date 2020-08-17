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
function requestCreatePost(data) {
  return function (dispatch) {
    fetch(`${url}articles`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["jwt-token"]}`,
      },
      body: JSON.stringify({
        article: {
          title: "manga",
          description: "Ever wonder how it is done?",
          body: data,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.article) {
          dispatch({ type: "ADD_NEW_POST", payload: res.article });
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export { getUserInfo, requestCreatePost };
