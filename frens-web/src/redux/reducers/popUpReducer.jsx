
const popUpReducer = (state = false, action) => {
    switch(action.type) {
        case "POP":
            return !state;
        default:
            return state;
    }
};

export default popUpReducer;