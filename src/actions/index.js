import {INCREMENT_COUNTER_ACTION, DECREMENT_COUNTER_ACTION} from "../constants";

export const incrementCounter = dispatch => () => dispatch({
  type: INCREMENT_COUNTER_ACTION 
});

export const decrementCounter = dispatch => () => dispatch({
  type: DECREMENT_COUNTER_ACTION 
});

export const fetchCounter = () => {
    fetch("http://localhost:3000/testAPI")
    .then(res => res.json()).then(json => console.log(json));
}
