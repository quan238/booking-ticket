import { combineReducers, createStore, applyMiddleware } from "redux";
import getMovie from "./movieReducer/getMovie";
import thunk from "redux-thunk";
import getUser from "./authenticationReducers/GetUser";
import getDetailMovie from "./movieReducer/getDetailMovie";

const rootReducer = combineReducers({
  getMovie: getMovie,
  getUser: getUser,
  getDetailMovie: getDetailMovie,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
