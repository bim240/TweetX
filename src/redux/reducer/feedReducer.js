export default function allFeed(state = [], action) {
  switch (action.type) {
    case "GOT_ALL_FEED":
      return action.payload;
    default:
      return state;
  }
}
