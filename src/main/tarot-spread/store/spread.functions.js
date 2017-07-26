/* flow */

import {IDrawnSpread} from '../interfaces/drawn-spread.interface';
import {getSpreadConfigByType, TSpreadType} from '../types';
import type { TSpreadCardList } from '../types/spread.types';
import {ITarotCard} from '../../tarot-card/interfaces/tarot-card.interface';
import {IDrawnCard} from '../../tarot-card/interfaces/drawn-card.interface';


export const getSpreadInitialState = (): IDrawnSpread => ({
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

export function getUprightOrReversedCard(card: ITarotCard): IDrawnCard {
  return {
    ...card,
    reversed: Math.floor(Math.random() * 100) >= 75,
  }
}

export function drawCardsForSpread(
  spreadType: TSpreadType,
  deck: Array<ITarotCard>,
): TSpreadCardList {
  const cardMap = new Map();
  [ ...generateUniqueRandomNumbers(
      getSpreadConfigByType(spreadType).totalCards,
      deck.length,
    )
  ].forEach((number, i) => {
    cardMap.set(i+1, getUprightOrReversedCard(deck[number]));
  });
  return cardMap;
}
