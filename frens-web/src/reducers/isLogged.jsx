const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case "LOGIN":
            return !state;
        case "LOGOUT":
            return false;
        default:
            return false;
    }
};

export default loggedReducer;