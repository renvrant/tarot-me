/* @flow */
import { DeckActions } from './deck.actions';
import { getDeckInitialState } from './deck.functions';
import { getTarotDeck } from '../../../data/deck/index';
import {IPayloadAction} from '../../root/types/create-action.interface';
import type {TDeck} from '../types/deck.type';

export const deckReducer = (
  state: TDeck = getDeckInitialState(),
  action: IPayloadAction
): TDeck => {
  switch (action.type) {
    case DeckActions.RETRIEVE:
      return getTarotDeck();
    default:
      return state;
  }
};
