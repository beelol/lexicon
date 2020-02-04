
import {INCREMENT_COUNTER_ACTION, DECREMENT_COUNTER_ACTION, FETCH_COUNTER} from "../constants";


export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER_ACTION:
      return state + 1;
    case DECREMENT_COUNTER_ACTION:
      return state - 1;
    case FETCH_COUNTER:
      return state = action.counter;
    default:
      return state;
  }
};