/* @flow */
import { compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpics } from './root.epics';
import persistState from 'redux-localstorage';
import {IAppState} from '../../types/app-state.interface';

function deimmutify(store: IAppState) {
  return {
    archive: store.archive,
  };
}

function reimmutify(plain: IAppState) {
  return plain ? {
    archive: plain.archive,
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
];

export const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);
