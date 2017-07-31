/* flow */

import { SpreadActions } from './spread.actions';
import { getSpreadInitialState } from './spread.functions';
import { ISpread, ISpreadCard } from '../types/spread.interfaces';

function getFlippedCard(
  card: ISpreadCard,
  spreadCards: Array<ISpreadCard>
): Array<ISpreadCard> {
  const newCards = [...spreadCards];
  const index = newCards.findIndex(currentCard => currentCard === card);
  if (newCards[index]) {
    newCards[index] = {
      ...card,
      orientation: {
        flipped: true
      }
    };
  }
  return newCards;
}

export const spreadReducer = (
  state: ISpread = getSpreadInitialState(),
  action
) => {
  switch (action.type) {
    case SpreadActions.CREATE:
      return {
        ...state,
        spreadMetadata: action.payload.spreadMetadata
      };
    case SpreadActions.DRAW:
      return {
        ...state,
        cards: action.payload.cards
      };
    case SpreadActions.CLEAR:
      return getSpreadInitialState();
    case SpreadActions.FLIP:
      return {
        ...state,
        cards: getFlippedCard(action.payload.card, state.cards)
      };
    default:
      return state;
  }
};
