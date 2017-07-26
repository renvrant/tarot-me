/* flow */

import { SpreadActions } from './spread.actions';
import {getSpreadInitialState} from './spread.functions';
import {IDrawnSpread} from '../interfaces/drawn-spread.interface';

export const spreadReducer = (state: IDrawnSpread = getSpreadInitialState(), action) => {
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
