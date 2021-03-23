import { FETCH_CREDENTIALS } from "../../actions/types";

let stateDefault = {
  credentials: null,
};

const ConfirmUser = (state = stateDefault, action) => {
  switch (action.type) {
    case FETCH_CREDENTIALS:
      // if (action.payload) {
      //   console.log("ok123")
      //   state.credentials = true;
      //   // return { ...state };
      // }
      console.log(state.credentials);
      state.credentials = action.payload;

      console.log(state.credentials);
      console.log(state);
      return { ...state };
    default:
      return { ...state };
  }
};

export default ConfirmUser;
