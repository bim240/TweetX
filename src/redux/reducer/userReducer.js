let initialState = {
  isAuthInProgress: false,
  userInfo: null,
  posts: [],
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_AUTH_IN_PROGRESS":
      return { ...state, isAuthInProgress: true };
    case "USER_AUTH_SUCCESS":
      return { ...state, isAuthInProgress: false, userInfo: action.payload };
    case "USER_AUTH_FAILED":
      return { ...state, isAuthInProgress: false };
    case "ADD_NEW_POST":
      return { ...state, posts: state.posts.concat(action.payload) };
    case "ALL_ARTICLES":
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
