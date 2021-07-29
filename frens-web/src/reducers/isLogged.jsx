// Gather user from action.payload??
// NOT FINISHED

const loggedReducer = (state = {}, action) => {
  let newUser = action.payload;
  switch (action.type) {
    case "LOGIN":
      state = { ...newUser };
      return state;
    case "LOGOUT":
      return false;
    default:
      return false;
  }
};

export default loggedReducer;
