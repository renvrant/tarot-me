/* @flow */

import { createStore } from 'redux';
import { initialState, rootReducer } from './root.reducer'
import combineReducers from 'redux/es/combineReducers';
import {composedEnhancers} from './root.enhancers';


export const store = createStore(
  combineReducers(rootReducer),
  initialState,
  composedEnhancers,
);
