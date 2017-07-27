/* @flow */

import { IAppState } from '../../types/app-state.interface';
import { deckReducer } from '../../../tarot-deck/store/deck.reducer';
import {spreadReducer} from '../../../tarot-spread/store/spread.reducer';
import { getDeckInitialState } from '../../../tarot-deck/store/deck.functions';
import {getSpreadInitialState} from '../../../tarot-spread/store/spread.functions';

export const initialState = {
  deck: getDeckInitialState(),
  spread: getSpreadInitialState(),
};
export const rootReducer: IAppState = {
  deck: deckReducer,
  spread: spreadReducer,
};
