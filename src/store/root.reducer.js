/* flow */

import { IAppState } from './app-state.interface';
import { deckReducer } from '../main/tarot-deck/store/deck.reducer';
import {spreadReducer} from '../main/tarot-spread/store/spread.reducer';
import { getDeckInitialState } from '../main/tarot-deck/store/deck.functions';
import {getSpreadInitialState} from '../main/tarot-spread/store/spread.functions';
import { routerReducer } from 'react-router-redux';

export const initialState = {
  deck: getDeckInitialState(),
  spread: getSpreadInitialState(),
};
export const rootReducer: IAppState = {
  deck: deckReducer,
  spread: spreadReducer,
  router: routerReducer,
};
