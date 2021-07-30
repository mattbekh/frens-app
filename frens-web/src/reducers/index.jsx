import {combineReducers} from "redux";

import darkReducer from "./isDark";
import InterestReducer from "./InterestReducer";
import loggedReducer from "./isLogged";
import popUpReducer from "./popUpReducer";
import chatUserReducer from "./chatUserReducer";

const allReducers = combineReducers({
    isDark: darkReducer,
    interestManager: InterestReducer,
    isLogged: loggedReducer,
    isPop: popUpReducer,
    chatUser: chatUserReducer
});

export default allReducers;