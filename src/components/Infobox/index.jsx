import { connect } from 'react-redux';
import React from 'react';
import './infobox.scss'

class Infobox extends React.Component {
  render() {
    return <div className={"infobox-container"}>

    </div>
  }
}

const mapStateToProps = state => {
  return ({
    // count: state.counter.count, counterId: state.counter.counterId
  })
}

const mapDispatchToProps = dispatch => ({
  // incrementCounter: incrementCounter(dispatch),
  // decrementCounter: decrementCounter(dispatch),
  // fetchCounter: fetchCounter(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Infobox);