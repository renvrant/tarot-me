/* flow */
import { DeckActions } from './deck.actions';
import { ITarotCard } from '../../tarot-card/interfaces/tarot-card.interface';
import { getDeckInitialState } from './deck.functions';
import {getTarotDeck} from '../../../data/deck/index';

export const deckReducer = (state: Array<ITarotCard> = getDeckInitialState(), action) => {
  switch (action.type) {
    case DeckActions.RETRIEVE:
      // Replace with async whenever a server happens
      return getTarotDeck();
    default:
      return state;
  }
};
