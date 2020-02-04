import {INCREMENT_COUNTER_ACTION, DECREMENT_COUNTER_ACTION, FETCH_COUNTER} from "../constants";

export const incrementCounter = dispatch => () => dispatch({
  type: INCREMENT_COUNTER_ACTION 
});

export const decrementCounter = dispatch => () => dispatch({
  type: DECREMENT_COUNTER_ACTION 
});

export const fetchCounter = (dispatch) => () => {
    fetch("http://localhost:3000/testAPI")
    .then(res => res.json()).then(json => dispatch({
      type: FETCH_COUNTER,
      counter: json.counter
    }));
}
