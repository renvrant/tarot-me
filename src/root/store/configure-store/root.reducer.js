/* @flow */

import { IAppState } from '../../types/app-state.interface';
import { appDataReducer } from '../../../appData/store/app-data.reducer';
import {spreadReducer} from '../../../tarot-spread/store/spread.reducer';
import { getAppDataInitialState } from '../../../appData/store/app-data.functions';
import {getSpreadInitialState} from '../../../tarot-spread/store/spread.functions';
import {getArchiveInitialState} from '../../../tarot-archive/store/archive.functions';
import {archiveReducer} from '../../../tarot-archive/store/archive.reducer';

export const initialState: IAppState = {
  appData: getAppDataInitialState(),
  spread: getSpreadInitialState(),
  archive: getArchiveInitialState()
};
export const rootReducer: IAppState = {
  appData: appDataReducer,
  spread: spreadReducer,
  archive: archiveReducer,
};
