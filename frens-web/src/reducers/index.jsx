import { combineReducers } from "redux";

import darkReducer from "./isDark";
import InterestReducer from "./InterestReducer";
import loggedReducer from "./isLogged";
import popUpReducer from "./popUpReducer";
import chatUserReducer from "./chatUserReducer";
import socialReducer from "./socialReducer";
import questionsReducer from "./questionsReducer";

const allReducers = combineReducers({
  isDark: darkReducer,
  interestManager: InterestReducer,
  loginUser: loggedReducer,
  isPop: popUpReducer,
  chatUser: chatUserReducer,
  socialProfile: socialReducer,
  questionsProfile: questionsReducer,
});

export default allReducers;
