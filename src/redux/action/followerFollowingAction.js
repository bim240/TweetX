let url = "https://conduit-api357.herokuapp.com/api/v1/";

function getAllFollowerFollowing() {
  return function (dispatch) {
    fetch(`${url}profiles//user/follower&following`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["jwt-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.allFollower) {
          dispatch({
            type: "GOT_ALL_FOLLOWER_FOLLOWING",
            payload: {
              allFollower: res.allFollower,
              allFollowing: res.allFollowing,
            },
          });
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export { getAllFollowerFollowing };
