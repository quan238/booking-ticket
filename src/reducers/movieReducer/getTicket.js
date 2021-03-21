import { GET_TICKET } from "../../actions/types";

const stateDefault = {
  rowPurchased: [],
};

const getTicket = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_TICKET: {
      let update = [...state.rowPurchased];
      let index = update.findIndex(
        (gheDangDat) => gheDangDat.number === action.ghe.number
      );
      if (index !== -1) {
        update.splice(index, 1);
      } else {
        update.push(action.ghe);
      }
      state.rowPurchased = update;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default getTicket;
