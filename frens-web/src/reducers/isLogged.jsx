// Gather user from action.payload??
// NOT FINISHED

const loggedReducer = (state = {}, action) => {
  let newUser;
  switch (action.type) {
    case "LOGIN":
      newUser = action.payload;
      state = { ...newUser };

      if (newUser.social) {
        state.social.facebook = newUser.social.facebook;
        state.social.instagram = newUser.social.instagram;
      }

      return state;

    case "LOGOUT":
      state = {};
      return state;
    default:
      return state;
  }
};

export default loggedReducer;
