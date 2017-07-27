import React, { Component } from 'react';
import AppRouter from '../AppRouter/AppRouter';
import AppNavigation from '../AppNavigation/AppNavigation';
import { connect } from 'react-redux';
import { DeckActions } from '../../main/tarot-deck/store/deck.actions';
import { Router } from 'react-router-dom';
import {routeHistory} from '../../store/configure-store';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(DeckActions.retrieve());
  }

  render() {
    return (
      <Router history={routeHistory}>
        <main className="App">
          <AppNavigation/>
          <AppRouter/>
        </main>
      </Router>
    );
  }
}

const mapStateToProps = ({ dispatch }) => ({ dispatch });

export default connect(mapStateToProps)(App);
