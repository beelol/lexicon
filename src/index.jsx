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
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Page from './components/Page';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(captureIncrementCounterSaga);


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Route path="/" component={App} />
        <Route path="/counter" component={CounterClicker} />
        <Route path="/testpage" component={Page} />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
