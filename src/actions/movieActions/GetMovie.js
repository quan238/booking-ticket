import Axios from "axios";
import { createAction } from "..";
import { movieServices } from "../../services/Movies";
import { GET_MOVIE } from "../types";

export const getMovieAPI = () => {
  return (dispatch) => {
    movieServices.fetchAll().then((result) => {
      // console.log(result);
      dispatch(createAction(GET_MOVIE, result.data));
    });
  };
};

const getMovie = (movie) => {
  return {
    type: GET_MOVIE,
    movie,
  };
};
export { getMovie };
