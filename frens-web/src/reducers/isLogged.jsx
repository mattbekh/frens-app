// Gather user from action.payload??
// NOT FINISHED

const loggedReducer = (state = { email: "" }, action) => {
  let newState;
  let newUser = action.payload;
  switch (action.type) {
    case "LOGIN":
      newState = { ...state };
      newState = { ...newUser };
      if (newUser.social) {
        newState.social.facebook = newUser.social.facebook;
        newState.social.instagram = newUser.social.instagram;
      }
      return newState;

    case "LOGOUT":
      newState = {};
      return newState;
    default:
      return state;
  }
};

export default loggedReducer;
