// import { Switch } from "react-router";
import { GET_DETAIL_MOVIE } from "../../actions/types";

const stateDefault = {
  result: {},
};

const getDetailMovie = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_DETAIL_MOVIE:
      state.result = action.payload;
    //   console.log(action.type);
      return { ...state };
    default:
      return { ...state };
  }
};

export default getDetailMovie;
