import { GET_USER } from "../types";
import { userService } from "../../services/Movies";
import { createAction } from "..";
export const getUser = () => {
  return (dispatch) => {
    userService.fetchUser().then((result) => {
      dispatch(createAction(GET_USER, result.data));
    });
  };
};
