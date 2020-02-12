import { connect } from 'react-redux';
import React from 'react';
import { incrementCounter, decrementCounter, fetchCounter } from '../../actions'
import './app.scss';

class App extends React.Component {
  render() {
    return <React.Fragment>
    </React.Fragment>
  }
}

const mapStateToProps = state => {
  return ({ count: state.counter.count, counterId: state.counter.counterId })
}

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: incrementCounter(dispatch),
  decrementCounter: decrementCounter(dispatch),
  fetchCounter: fetchCounter(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);