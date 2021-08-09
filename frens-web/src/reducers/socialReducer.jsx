const socialReducer = (state = {}, action) => {
  let newSocial = action.payload;
  switch (action.type) {
    case "UPDATE_SOCIAL":
      state = { ...newSocial };
      return state;
    default:
      return state;
  }
};

export default socialReducer;
