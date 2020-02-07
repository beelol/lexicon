
import {INCREMENT_COUNTER_ACTION, DECREMENT_COUNTER_ACTION, FETCH_COUNTER} from "../constants";

export default (state = {
  count: 0,
  counterId: 0
}, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER_ACTION:
      return { 
        ...state,
        count: state.count + 1
      }
    case DECREMENT_COUNTER_ACTION:
      return { 
        ...state,
        count: state.count - 1
      }
    case FETCH_COUNTER:
      return {
        ...state,
        count: action.count,
        counterId: action.counterId
      }
    default:
      return state;
  }
};