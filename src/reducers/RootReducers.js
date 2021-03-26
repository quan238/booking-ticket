import { combineReducers, createStore, applyMiddleware } from "redux";
import getMovie from "./movieReducer/getMovie";
import thunk from "redux-thunk";
import getUser from "./authenticationReducers/GetUser";
import getDetailMovie from "./movieReducer/getDetailMovie";
import getTicket from "./movieReducer/getTicket";
import ConfirmUser from "./authenticationReducers/ConfirmUser";

const rootReducer = combineReducers({
  getMovie: getMovie,
  getUser: getUser,
  getDetailMovie: getDetailMovie,
  getTicket: getTicket,
  ConfirmUser: ConfirmUser,
  
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
