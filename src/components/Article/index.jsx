import { connect } from 'react-redux';
import React from 'react';
import { incrementCounter, decrementCounter, fetchCounter } from '../../actions'
import './article.scss'

class Article extends React.Component {
  render() {
    return <div className={"article-container"}>

    </div>
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