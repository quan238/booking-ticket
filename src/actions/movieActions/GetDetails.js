import Axios from "axios";
import { createAction } from "..";
import { movieServices } from "../../services/Movies";
import { GET_DETAIL_MOVIE, GET_DETAIL_PAYMENT } from "../types";

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
export const getDetailPayment = (movie_id) => {
  return (dispatch) => {
    movieServices.fetchDetailPayment(movie_id).then((result) => {
      console.log(result.data);   
      dispatch(createAction(GET_DETAIL_PAYMENT, result.data));
    });
  };
};
