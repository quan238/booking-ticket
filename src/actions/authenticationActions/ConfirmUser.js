import { createAction } from "..";
import { userService } from "../../services/Movies";
import { FETCH_CREDENTIALS } from "../types";

export const signInUser = (user) => {
  //   console.log(user);
  return (dispatch) => {
    // console.log(user);
    userService
      .signIn(user)
      .then((result) => {
        // console.log(user);
        console.log("ok");
        // console.log(result);
        dispatch(createAction(FETCH_CREDENTIALS, result.data));
        localStorage.setItem("credentials", JSON.stringify(result.data));
        // window.location.replace("/");
    })
      .catch((err) => {
        console.log("not ok");
        console.log(err);
      });
  };
};
