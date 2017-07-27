/* @flow */

import React, { Component } from 'react';
import AppNavigation from '../AppNavigation/AppNavigation';
import { connect } from 'react-redux';
import { DeckActions } from '../../main/tarot-deck/store/deck.actions';
import { Router } from 'react-router-dom';
import {routeHistory} from '../../store/configure-store';
import {routeConfig} from '../app.routes';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(DeckActions.retrieve());
  }

  render() {
    return (
      <Router history={routeHistory}>
        <main>
          <AppNavigation/>
          { routeConfig }
        </main>
      </Router>
    );
  }
}

const mapStateToProps = ({ dispatch }) => ({ dispatch });

export default connect(mapStateToProps)(App);
