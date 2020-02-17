import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import styles from './infoboxProperty.scss'
import stylesJs from './styles';

class InfoboxProperty extends React.Component {
  render() {
    const { classes, theme, name, value } = this.props;

    return <div className={styles.keyValuePair}>
      <Typography variant={"overline"}>{name} </Typography>
      <div className={styles.infoboxDivider}></div>
      <Typography variant={"caption"}>{value}</Typography>
    </div >
  }
}

export default (withStyles(stylesJs, { withTheme: true })(InfoboxProperty));