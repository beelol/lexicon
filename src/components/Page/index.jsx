import { connect } from 'react-redux';
import React from 'react';
import './page.scss';
import Sidebar from '../Sidebar';
import Article from '../Article';
import Infobox from '../Infobox';

class Page extends React.Component {
  render() {
    return <React.Fragment>
      <Sidebar></Sidebar>
      <Article></Article>
      <Infobox></Infobox>
    </React.Fragment>
  }
}

const mapStateToProps = state => {
  return ({})
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);