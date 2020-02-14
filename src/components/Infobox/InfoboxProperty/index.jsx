import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
// import './infobox.scss'
import styles from './styles';

class InfoboxProperty extends React.Component {
  render() {
    const { classes, theme, name, value } = this.props;

    return <Typography >{name}: {value}</Typography>
  }
}

export default (withStyles(styles, { withTheme: true })(InfoboxProperty));