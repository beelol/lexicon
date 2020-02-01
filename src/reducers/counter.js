
import {INCREMENT_COUNTER_ACTION, DECREMENT_COUNTER_ACTION} from "../constants";

export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER_ACTION:
      return state + 1;
    case DECREMENT_COUNTER_ACTION:
      return state - 1;
    default:
      return state;
  }
};