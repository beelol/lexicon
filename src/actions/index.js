import {INCREMENT_COUNTER_ACTION, DECREMENT_COUNTER_ACTION, FETCH_COUNTER} from "../constants";

export const incrementCounter = dispatch => () => dispatch({
  type: INCREMENT_COUNTER_ACTION 
});

export const decrementCounter = dispatch => () => dispatch({
  type: DECREMENT_COUNTER_ACTION 
});

export const fetchCounter = (dispatch) => () => {
    fetch("http://localhost:3000/counters")
    .then(res => res.json()).then(json => {
      console.log(json.counters[0].count);
      
      dispatch({
      type: FETCH_COUNTER,
      count: json.counters[0].count,
      counterId: json.counters[0]._id
      });
  });
}
