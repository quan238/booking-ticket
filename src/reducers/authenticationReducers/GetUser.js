import { GET_USER } from "../../actions/types";
const stateDefault = {
  user: [],
};
const getUser = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_USER:
      state.user = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
};
export default getUser;
