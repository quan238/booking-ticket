import { combineReducers, createStore, applyMiddleware } from "redux";
import getMovie from "./movieReducer/getMovie";
import thunk from "redux-thunk";
import getUser from "./authenticationReducers/GetUser";

const rootReducer = combineReducers({
  getMovie: getMovie,
  getUser: getUser,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
