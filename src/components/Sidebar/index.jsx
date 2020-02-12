import { connect } from 'react-redux';
import React from 'react';
import './sidebar.scss'
import Drawer from '@material-ui/core/Drawer';
import { openSidebar, closeSidebar } from '../../actions'

import clsx from 'clsx';
import { withStyles, makeStyles, useTheme, withTheme, styled } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Button } from '@material-ui/core';

const drawerWidth = 240;

const sideList = (
  <div >
    <List>
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Mail" />
      </ListItem>

    </List>
  </div>
);

const styles = {// root: {
  //   display: 'flex',
  // },
  // hide: {
  //   display: 'none',
  // },
  paper: {
    width: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  }
};

class Sidebar extends React.Component {

  render() {
    return <Drawer
      anchor={"left"}
      variant={"persistent"}
      open={true}
      onClose={this.props.closeSidebar}
      classes={{
        paper: this.props.classes.paper
      }}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={this.props.closeSidebar}
        onKeyDown={this.props.closeSidebar}
      >
        {sideList}
      </div>
    </Drawer>
  }
}

const mapStateToProps = state => ({ open: state.sidebar.open });

const mapDispatchToProps = (dispatch) => ({
  openSidebar: openSidebar(dispatch),
  closeSidebar: closeSidebar(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Sidebar));