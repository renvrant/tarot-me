/* flow */

import {IActiveSpread} from '../interfaces/active-spread.interface';
import {getSpreadConfigByType, TSpreadType} from '../types';
import type { TSpreadCards } from '../types/spread.types';
import {ITarotCard} from '../../tarot-card/interfaces/tarot-card.interface';


export const getSpreadInitialState = (): IActiveSpread => ({
  type: null,
  cards: new Map(),
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

export function drawCardsForSpread(
  spreadType: TSpreadType,
  deck: Array<ITarotCard>,
): TSpreadCards {
  const cardMap = new Map();
  [ ...generateUniqueRandomNumbers(
      getSpreadConfigByType(spreadType).totalCards,
      deck.length,
    )
  ].forEach((number, i) => {
    cardMap.set(i+1, deck[number])}
  );
  return cardMap;
}
