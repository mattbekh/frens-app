const chatUserReducer = (state = null, action) => {
    let user;

    switch(action.type) {
        case "CHATUSER":
            user = action.payload;
            return user;
        default:
            return null;
    }
};

export default chatUserReducer;