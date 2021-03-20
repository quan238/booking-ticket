import { GET_DETAIL_MOVIE, GET_MOVIE } from "../../actions/types";

const stateDefault = {
  result: [],
};
const getMovie = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_MOVIE:
      state.result = action.payload;
      // console.log( state.result);
      return { ...state };
    // case GET_DETAIL_MOVIE:
    //   state.result = action.payload;
    //   return { ...state };
    default:
      return { ...state };
  }
};

export default getMovie;
