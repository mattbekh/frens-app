import {combineReducers} from "redux";

import darkReducer from "./isDark";
import InterestReducer from "./InterestReducer";
import loggedReducer from "./isLogged";

const allReducers = combineReducers({
    isDark: darkReducer,
    interestManager: InterestReducer,
    isLogged: loggedReducer
});

export default allReducers;