/* flow */

import { compose, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpics } from './root.epics';
import { initialState, rootReducer } from './root.reducer';
import persistState from 'redux-localstorage';
import combineReducers from 'redux/es/combineReducers';
import {routerMiddleware} from 'react-router-redux';
import {createBrowserHistory} from 'history';

export const routeHistory = createBrowserHistory();

export function deimmutify(store) {
  return {
    spreadHistory: store.spreadHistory,
  };
}

export function reimmutify(plain) {
  return plain ? {
    spreadHistory: plain.spreadHistory,
  } : {};
}

const enhancers = [
  persistState(
    '',
    {
      key: 'tarot-me',
      serialize: store => JSON.stringify(deimmutify(store)),
      deserialize: state => reimmutify(JSON.parse(state)),
    },
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
];

const middleware = [
  createLogger({
    level: 'info',
    collapsed: true,
  }),
  createEpicMiddleware(rootEpics),
  routerMiddleware(routeHistory),
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export const store = createStore(
  combineReducers(rootReducer),
  initialState,
  composedEnhancers,
);
