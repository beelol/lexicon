import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import React from 'react';
import './page.scss';
import Sidebar from '../Sidebar';
import Article from '../Article';
import Infobox from '../Infobox';
import CssBaseline from '@material-ui/core/CssBaseline';
import { openSidebar, closeSidebar, fetchItemBySlug } from '../../actions'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import clsx from 'clsx';

import styles from './styles';

class Page extends React.Component {

  componentDidMount() {
    console.log(`Changing page to ${this.props.match.params.slug}`);

    this.props.fetchItemBySlug(this.props.match.params.slug);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      console.log(`Changing page to ${this.props.match.params.slug}`);
    }
  }

  render() {
    const { classes, openSidebar, open, closeSidebar, theme, match, item } = this.props;

    return <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openSidebar}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {item.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Article></Article>
      </main>
      <Infobox itemName={item.name} itemImage={item.image} itemProperties={item.properties}></Infobox>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({ ownProps, open: state.sidebar.open, item: state.item });
};

const mapDispatchToProps = (dispatch) => ({
  openSidebar: openSidebar(dispatch),
  closeSidebar: closeSidebar(dispatch),
  fetchItemBySlug: fetchItemBySlug(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Page));