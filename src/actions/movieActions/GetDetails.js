import Axios from "axios";
const getDetailsAPI = (movie_id) => {
  return (dispatch) => {
    Axios({
      url: "        ",
      method: "GET",
    })
      .then((result) => {
        console.log(result.data);
      })
      .then((err) => {});
  };
};
