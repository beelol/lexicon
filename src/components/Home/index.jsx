import { connect } from 'react-redux';
import React from 'react';
import PageList from '../PageList';
import { getRecentItems } from '../../queries';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { fetchRecentItems } from '../../actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchRecentItems();
  }

  render() { return (<PageList />); }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecentItems: fetchRecentItems(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Home));

