/* @flow */

import { combineEpics } from 'redux-observable';
import {createSpreadEpic} from '../main/tarot-spread/store/spread.epics';

export const rootEpics = combineEpics(
  createSpreadEpic,
);
