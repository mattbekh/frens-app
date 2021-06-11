import {combineReducers} from "redux";
import darkReducer from "./isDark";
import InterestReducer from "./InterestReducer";
const allReducers = combineReducers({
    isDark: darkReducer,
    interestManager: InterestReducer,
});

export default allReducers;