/* flow */

import {ITarotCard} from '../../tarot-card/types/tarot-card.interface';
import {ICardOrientation, ISpread, ISpreadCard, ISpreadMetadata} from '../types/spread.interfaces';

export const getSpreadInitialState = (): ISpread => ({
  type: null,
  cards: [],
});

export function generateUniqueRandomNumbers(
  totalNumbers: number,
  rangeMax: number,
  rangeMin = 0,
): Set<number> {
  const uniqueRandomNumbers = new Set();
  while (uniqueRandomNumbers.size < totalNumbers) {
    uniqueRandomNumbers.add(
      Math.floor(Math.random() * (rangeMax - rangeMin)) + rangeMin
    );
  }
  return uniqueRandomNumbers;
}

export function getCardOrientation(): ICardOrientation {
  return {
    reversed: Math.floor(Math.random() * 100) >= 75,
    flipped: false,
  };
}

export function drawCardsForSpread(
  spread: ISpreadMetadata,
  deck: Array<ITarotCard>,
): ISpreadCard {
  return [ ...generateUniqueRandomNumbers(
    spread.totalCards,
    deck.length,
  )]
    .map((randomNumber, i) => ({
      position: spread.positions[i],
      card: deck[randomNumber],
      orientation: getCardOrientation(),
    })
  );
}
