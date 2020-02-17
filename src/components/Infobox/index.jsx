import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import React from 'react';
import './infobox.scss'
import styles from './styles';
import InfoboxProperty from './InfoboxProperty';
import { Divider } from '@material-ui/core';

class Infobox extends React.Component {
  render() {
    const { classes, theme } = this.props;

    return <div className={classes.container}>
      <div className={classes.innerContent}>
        <div className={classes.drawerHeader} />
        <Typography>Enforcer - With Bolters Cannons</Typography>

        <div className={classes.infoboxImageContainer}>
          <img className={classes.infoboxImage} src={"https://vignette.wikia.nocookie.net/wiredforwar/images/f/f7/AGK3HVY.jpg/revision/latest/scale-to-width-down/100?cb=20130901010959"}></img>
        </div>

        <Divider className={classes.divider} />

        <InfoboxProperty name={"Class"} value={"Aggressor"}></InfoboxProperty>
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return ({
    // count: state.counter.count, counterId: state.counter.counterId
  })
}

// 

const mapDispatchToProps = dispatch => ({
  // incrementCounter: incrementCounter(dispatch),
  // decrementCounter: decrementCounter(dispatch),
  // fetchCounter: fetchCounter(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Infobox));