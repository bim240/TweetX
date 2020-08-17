let initialState = {
  allFollower: [],
  allFollowing: [],
};

export default function allFollowerFollowing(state = initialState, action) {
  switch (action.type) {
    case "GOT_ALL_FOLLOWER_FOLLOWING":
      return {
        ...state,
        allFollower: action.payload.allFollower,
        allFollowing: action.payload.allFollowing,
      };
    default:
      return state;
  }
}
