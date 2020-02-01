import { connect } from 'react-redux';
import React from 'react';
import Button from '@material-ui/core/Button';
import Counter from '../Counter';
import { incrementCounter, decrementCounter } from '../../actions'

const App = (props) => {
  console.log(props);

  return <div>
    <Button variant="contained" color="primary" onClick={props.incrementCounter}>Click Me!</Button>
    <Counter counter={props.counter} />
  </div>
};

const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: incrementCounter(dispatch),
  decrementCounter: decrementCounter(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);