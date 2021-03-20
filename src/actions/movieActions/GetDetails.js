import Axios from "axios";
import { createAction } from "..";
import { movieServices } from "../../services/Movies";
import { GET_DETAIL_MOVIE } from "../types";

export const getDetailsAPI = (movie_id) => {
  return (dispatch) => {
    movieServices.fetchDetailMovie(movie_id).then((result) => {
      // console.log(result.data);
      dispatch(createAction(GET_DETAIL_MOVIE, result.data));
    });
  };
};
//
// export default getDetailsAPI;
