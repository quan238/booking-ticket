// import { Switch } from "react-router";
import { GET_DETAIL_MOVIE, GET_DETAIL_PAYMENT } from "../../actions/types";

const stateDefault = {
  result: {},
};

const getDetailMovie = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_DETAIL_MOVIE:
      state.result = action.payload;
      //   console.log(action.type);
      return { ...state };
    case GET_DETAIL_PAYMENT:
      state.result = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};

export default getDetailMovie;
