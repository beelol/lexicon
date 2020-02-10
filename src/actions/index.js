import {INCREMENT_COUNTER_ACTION, DECREMENT_COUNTER_ACTION, FETCH_COUNTER} from "../constants";
import { sendQuery } from 'surge-graphql'

export const incrementCounter = dispatch => () => dispatch({
  type: INCREMENT_COUNTER_ACTION 
});

export const decrementCounter = dispatch => () => dispatch({
  type: DECREMENT_COUNTER_ACTION 
});

export const fetchCounter = (dispatch) => () => {
    var query = 
    `query {
      counterOne {
        _id
        count
      }
    }`;

    var url = "http://localhost:3000/graphql";

    sendQuery(url, query).then(res => res.json().then(json => dispatch({
        type: FETCH_COUNTER,
        count: json.data.counterOne.count,
        counterId: json.data.counterOne._id
        })
      ));
}
