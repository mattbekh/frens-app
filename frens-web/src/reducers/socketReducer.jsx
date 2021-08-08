const socketReducer = (state = {}, action) => {
    let socket = action.payload;

    switch (action.type) {
      case "SET_SOCKET":
        state = socket;
        return state;
      case "CLEAR_SOCKET":
        state = {};
        return state;
      default:
        return state;
    }
  };
  
  export default socketReducer;