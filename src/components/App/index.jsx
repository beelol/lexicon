import { connect } from 'react-redux';
import React from 'react';
import Button from '@material-ui/core/Button';
import Counter from '../Counter';
import { incrementCounter, decrementCounter, fetchCounter } from '../../actions'
import './app.scss'

class App extends React.Component {

  componentDidMount() { fetchCounter() }

  render() {
    return <div>
      <Button variant="contained" color="primary" onClick={this.props.incrementCounter}>Click Me!</Button>
      <Counter counter={this.props.counter} />
    </div>
  }

}

const mapStateToProps = state => ({ counter: state.counter });

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: incrementCounter(dispatch),
  decrementCounter: decrementCounter(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);