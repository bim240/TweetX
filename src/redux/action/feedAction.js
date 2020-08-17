let url = "https://conduit-api357.herokuapp.com/api/v1/";

function getAllFeed() {
  return function (dispatch) {
    fetch(`${url}articles/feed`, {
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        authorization: `${localStorage["jwt-token"]}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.articles) {
          console.log(res.articles, "res.articles");
          dispatch({ type: "GOT_ALL_FEED", payload: res.articles });
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export { getAllFeed };
