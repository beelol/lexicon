import { connect } from 'react-redux';
import React from 'react';
import './sidebar.scss'
import Drawer from '@material-ui/core/Drawer';
import { openSidebar, closeSidebar } from '../../actions'
import { withStyles } from '@material-ui/core/styles';
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
);

const styles = (theme) => ({// root: {
  //   display: 'flex',
  // },
  // hide: {
  //   display: 'none',
  // },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

class Sidebar extends React.Component {

  render() {
    const { classes, closeSidebar, theme, open } = this.props

    return <Drawer
      anchor={"left"}
      variant={"persistent"}
      open={open}
      onClose={closeSidebar}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={closeSidebar}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      {sideList}
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
)(withStyles(styles, { withTheme: true })(Sidebar));