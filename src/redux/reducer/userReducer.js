let initialState = {
  isAuthInProgress: false,
  userInfo: null,
};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH_IN_PROGRESS":
      return { ...state, isAuthInProgress: true };

    default:
      return state;
  }
}
