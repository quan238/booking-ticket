import { GET_MOVIE } from "../../actions/types";

const stateDefault = {
  result: [{}],
};
const getMovie = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_MOVIE:

      state.result = action.movie;
      
      console.log(action.movie.results);
      return { ...state };
    default:
      return { ...state };
  }
};

export default getMovie;
