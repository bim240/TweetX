let url = "https://conduit-api357.herokuapp.com/api/v1/";

function getAllUserList() {
  return function (dispatch) {
    fetch(`${url}users/all`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["jwt-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.allUser) {
          dispatch({ type: "GOT_ALL_USER_LIST", payload: res.allUser });
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export { getAllUserList };
