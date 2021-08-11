const darkReducer = (state=false, action) => {
    switch(action.type) {
        case "DARK":
            return !state;
        default:
            return state;
    }
};

export default darkReducer;