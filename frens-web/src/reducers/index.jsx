import {combineReducers} from "redux";

import darkReducer from "./isDark";
import InterestReducer from "./InterestReducer";
import loggedReducer from "./isLogged";
import popUpReducer from "./popUpReducer";

const allReducers = combineReducers({
    isDark: darkReducer,
    interestManager: InterestReducer,
    isLogged: loggedReducer,
    isPop: popUpReducer
});

export default allReducers;