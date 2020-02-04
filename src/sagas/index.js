import "core-js/stable";
import "regenerator-runtime/runtime";

import { takeLatest, select } from 'redux-saga/effects'

import {INCREMENT_COUNTER_ACTION, DECREMENT_COUNTER_ACTION} from "../constants"

function* updateCounter(action) {

  const state = yield select();

  const body = {
    counter: state.counter
  }

  fetch("http://localhost:3000/counter", 
  {
    method: "PATCH", 
    body: JSON.stringify(body),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
        }
  }).then(response => response.json())
  .then(json => console.log(json));
}

function* captureIncrementCounterSaga() {
  yield takeLatest(INCREMENT_COUNTER_ACTION, updateCounter);
}

export default captureIncrementCounterSaga;