
import { FETCH_ITEMS } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return action.items;
    default:
      return state;
  }
};