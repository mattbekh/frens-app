const socialReducer = (state = {}, action) => {
  let newSocial;
  switch (action.type) {
    case "UPDATE_LOGIN_SOCIAL":
      newSocial = action.payload;
      state = { ...newSocial };
      return state;
    default:
      return state;
  }
};

export default socialReducer;
