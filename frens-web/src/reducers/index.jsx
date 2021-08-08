import {combineReducers} from "redux";

import darkReducer from "./isDark";
import InterestReducer from "./InterestReducer";
import loggedReducer from "./isLogged";
import popUpReducer from "./popUpReducer";
import chatUserReducer from "./chatUserReducer";
import socketReducer from "./socketReducer";
import roomReducer from "./roomReducer";

const allReducers = combineReducers({
    isDark: darkReducer,
    interestManager: InterestReducer,
    isLogged: loggedReducer,
    isPop: popUpReducer,
    chatUser: chatUserReducer,
    socket: socketReducer,
    chatRoom: roomReducer
});

export default allReducers;