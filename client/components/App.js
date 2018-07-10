import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from './header/Header';
import { Home } from './home/Home';
import Members from './members/Members';
import ManageMembers from './members/ManageMembers';
import { About } from './about/About';

class App extends React.Component {
  render() {
    console.log(this.props.loading);
    return (
      <main className="main">
        <Header
            loading={this.props.loading}
        />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/members' component={Members}/>
          <Route exact path='/member' component={ManageMembers} />
          <Route path='/member/:id' component={ManageMembers} />
          <Route path='/about' component={About}/>
        </Switch>
      </main>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default withRouter(
  connect(mapStateToProps)(App)
);
