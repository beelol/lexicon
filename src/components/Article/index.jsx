import { connect } from 'react-redux';
import React from 'react';
import { incrementCounter, decrementCounter, fetchCounter } from '../../actions'
import './article.scss'
import { Typography } from '@material-ui/core';

class Article extends React.Component {
  render() {
    return <Typography paragraph>
      {this.props.children}
    </Typography>
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
)(Article);