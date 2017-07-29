/* @flow */

import { combineEpics } from 'redux-observable';
import { createSpreadEpic } from '../../../tarot-spread/store/spread.epics';
import { retrieveAppDataEpic } from '../../../appData/store/app-data.epics';

export const rootEpics = combineEpics(createSpreadEpic, retrieveAppDataEpic);
