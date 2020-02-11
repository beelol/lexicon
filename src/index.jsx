import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './components/App'
import createSagaMiddleware from 'redux-saga'
import captureIncrementCounterSaga from "./sagas"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CounterClicker from './components/CounterClicker';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(captureIncrementCounterSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/counter" component={CounterClicker} />
    </Router>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
