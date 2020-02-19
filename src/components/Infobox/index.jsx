import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import React from 'react';
import styles from './infobox.scss'
import MuiStyles from './styles';
import InfoboxProperty from './InfoboxProperty';
import { Divider } from '@material-ui/core';

class Infobox extends React.Component {

  convertPropertyObjectsToObject(propertyObjects) {
    const newObject = {};

    propertyObjects.forEach((propertyObject) => {
      newObject[propertyObject.name] = propertyObject.value;
    })

    return newObject;
  }

  getInfoboxProperties(properties) {
    return Object.keys(properties).map(propertyKey => <InfoboxProperty key={propertyKey} name={propertyKey} value={properties[propertyKey]} />);
  }

  render() {
    const { classes, theme, itemName, itemImage, itemProperties } = this.props;

    console.log();


    return <div className={classes.container}>
      <div className={classes.innerContent}>
        <div className={classes.drawerHeader} />
        <Typography variant="h6">{itemName}</Typography>

        <div className={classes.infoboxImageContainer}>
          <img className={classes.infoboxImage} src={itemImage}></img>
        </div>

        <div className={styles.infoboxPropertiesContainer}>
          <Divider className={classes.infoboxDivider} />
          {this.getInfoboxProperties(this.convertPropertyObjectsToObject(itemProperties))}
        </div>
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
)(withStyles(MuiStyles, { withTheme: true })(Infobox));