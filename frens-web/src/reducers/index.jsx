import {combineReducers} from "redux";

import darkReducer from "./isDark";
import loggedReducer from "./isLogged";
import popUpReducer from "./popUpReducer";
import chatUserReducer from "./chatUserReducer";
import socketReducer from "./socketReducer";
import roomReducer from "./roomReducer";
import socialReducer from "./socialReducer";
import questionsReducer from "./questionsReducer";

const allReducers = combineReducers({
  isDark: darkReducer,
  loginUser: loggedReducer,
  isPop: popUpReducer,
  chatUser: chatUserReducer,
  socialProfile: socialReducer,
  questionsProfile: questionsReducer,
  socket: socketReducer,
  chatRoom: roomReducer
});

export default allReducers;