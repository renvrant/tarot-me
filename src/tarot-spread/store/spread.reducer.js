/* flow */

import { SpreadActions } from './spread.actions';
import {getSpreadInitialState} from './spread.functions';
import {ISpread} from '../types/spread.interfaces';

export const spreadReducer = (state: ISpread = getSpreadInitialState(), action) => {
  switch (action.type) {
    case SpreadActions.CREATE:
      return {
        ...state,
        type: action.payload.spreadType,
      };
    case SpreadActions.DRAW:
      return {
        ...state,
        cards: action.payload.cards,
      };
    case SpreadActions.CLEAR:
      return getSpreadInitialState();
    default:
      return state;
  }
};
