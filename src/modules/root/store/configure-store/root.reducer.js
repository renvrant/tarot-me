/* @flow */

import { IAppState } from '../../types/app-state.interface';
import { deckReducer } from '../../../tarot-deck/store/deck.reducer';
import {spreadReducer} from '../../../tarot-spread/store/spread.reducer';
import { getDeckInitialState } from '../../../tarot-deck/store/deck.functions';
import {getSpreadInitialState} from '../../../tarot-spread/store/spread.functions';
import {getArchiveInitialState} from '../../../tarot-archive/store/archive.functions';
import {archiveReducer} from '../../../tarot-archive/store/archive.reducer';

export const initialState: IAppState = {
  deck: getDeckInitialState(),
  spread: getSpreadInitialState(),
  archive: getArchiveInitialState()
};
export const rootReducer: IAppState = {
  deck: deckReducer,
  spread: spreadReducer,
  archive: archiveReducer,
};
