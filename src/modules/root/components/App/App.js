/* @flow */

import React, { Component } from 'react';
import AppNavigation from '../AppNavigation/AppNavigation';
import { connect } from 'react-redux';
import { DeckActions } from '../../../tarot-deck/store/deck.actions';
import { BrowserRouter } from 'react-router-dom';
import {routeConfig} from '../../app.routes';

class App extends Component {
  componentWillMount() {
    this.props.retrieve();
  }

  render() {
    return (
      <BrowserRouter>
        <main>
          <AppNavigation/>
          { routeConfig }
        </main>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  retrieve: DeckActions.retrieve(),
};

export default connect((state, props) => props, mapDispatchToProps)(App);
