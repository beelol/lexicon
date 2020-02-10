import "core-js/stable";
import "regenerator-runtime/runtime";

import { takeLatest, select } from 'redux-saga/effects'

import {INCREMENT_COUNTER_ACTION, DECREMENT_COUNTER_ACTION} from "../constants"

import { sendMutation } from 'surge-graphql'

function* updateCounter(action) {

  const state = yield select();

  const body = {
    count: state.counter.count
  }

  var query = 
    `mutation {
      counterUpdateById(record: {
        _id: \"${state.counter.counterId}\",
        count: ${state.counter.count}
      }) {
        recordId
      }
    }`;

  var url = "http://localhost:3000/graphql";

  sendMutation(url, query/*
    {body: 
      {
        variables: 
          { "_id": state.counter.counterId, "count": state.counter.count }
      }
    }*/
).catch(err => console.log(err));
}

function* captureIncrementCounterSaga() {
  yield takeLatest(INCREMENT_COUNTER_ACTION, updateCounter);
}

export default captureIncrementCounterSaga;

// "{"query":"mutation {\n      counterUpdateById(record: {\n        _id: 5e4099aae27c6630bb3bfb2e,\n        count: 12\n      }) {\n        recordId\n      }\n    }"}"