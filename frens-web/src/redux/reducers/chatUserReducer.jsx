const chatUserReducer = (state = {}, action) => {
    let newUser = action.payload;
    switch (action.type) {
      case "SET_CHAT_USER":
        state = { newUser };
        return state;
      case "CLEAR_CHAT_USER":
        state = {};
        return state;
      default:
        return state;
    }
  };
  
  export default chatUserReducer;