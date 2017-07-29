/* @flow */

import React, { Component } from 'react';
import AppNavigation from '../AppNavigation/AppNavigation';
import { connect } from 'react-redux';
import { AppDataActions } from '../../../appData/store/app-data.actions';
import { BrowserRouter } from 'react-router-dom';
import {routeConfig} from '../../app.routes';
import {appLoadingSelector} from '../../../appData/store/app-data.selectors';
import {IAppState} from '../../types/app-state.interface';

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

const mapStateToProps = (state: IAppState): { loading: boolean } =>
  ({ loading: appLoadingSelector(state) });

const mapDispatchToProps = {
  retrieve: () => AppDataActions.retrieve(),
};

export default connect((state, props) => props, mapDispatchToProps)(App);
