import { connect } from 'react-redux';
import React from 'react';
import Button from '@material-ui/core/Button';
import Counter from '../Counter';
import { incrementCounter, decrementCounter, fetchCounter } from '../../actions'
import './app.scss'

class App extends React.Component {

  componentDidMount() { this.props.fetchCounter() }

  incrementCounterAndPostNewCount() {
    this.props.incrementCounter();
    console.log(this.props.counter);
  }

  render() {
    return <div>
      <Button variant="contained" color="primary" onClick={this.incrementCounterAndPostNewCount.bind(this)}>Click Me!</Button>
      <Counter counter={this.props.counter} />
    </div>
  }

}

const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: incrementCounter(dispatch),
  decrementCounter: decrementCounter(dispatch),
  fetchCounter: fetchCounter(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);