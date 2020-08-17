export default function allUserList(state = [], action) {
  switch (action.type) {
    case "GOT_ALL_USER_LIST":
      return action.payload;

    default:
      return state;
  }
}
