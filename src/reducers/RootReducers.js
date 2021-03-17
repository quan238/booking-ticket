import { combineReducers, createStore, applyMiddleware } from "redux";
import getMovie from "./movieReducer/getMovie";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  getMovie: getMovie,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
