import { createAction } from "..";
import { userService } from "../../services/Movies";
import { FETCH_CREDENTIALS } from "../types";
import swal from "sweetalert";

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
        swal({
          title: "Login Succesfully!",
          text: "You clicked the button!",
          icon: "success",
        }).then(() => {
          window.location.replace("/");
        });
      })
      .catch((err) => {
        console.log("not ok");
        console.log(err);
        swal("Wrong password", "Typing again!", "error");
      });
  };
};
