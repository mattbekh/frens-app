const roomReducer = (state = null, action) => {
    let room = action.payload;

    switch (action.type) {
      case "SET_ROOM":
        state = room;
        return state;
      case "CLEAR_ROOM":
        state = "";
        return state;
      default:
        return state;
    }
  };
  
  export default roomReducer;