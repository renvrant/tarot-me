/* @flow */

import { ISpread } from './spread.interface';
import {IDrawnCard} from '../../tarot-card/types/drawn-card.interface';

export const SpreadTypes: { [key: string]: ISpread } = {
  Single: {
    type: 'Single',
    title: 'Single Card',
    totalCards: 1,
    cardPositions: new Map()
      .set(1, 'Your Card'),
  },
  PastPresentFuture: {
    type: 'PastPresentFuture',
    title: 'Past, Present, Future',
    totalCards: 3,
    cardPositions: new Map()
      .set(1, 'Past')
      .set(2, 'Present')
      .set(3, 'Future'),
  },
  ThinkFeelDo: {
    type: 'ThinkFeelDo',
    title: 'Think, Feel, Do',
    totalCards: 3,
    cardPositions: new Map()
      .set(1, 'What I Think')
      .set(2, 'How I Feel')
      .set(3, 'What to Do'),
  },
};

export type TSpreadType = $Keys<typeof SpreadTypes>;

export type TSpreadCardList = Map<number, IDrawnCard>;

export const SpreadTypesList: Array<ISpread> = Object.keys(SpreadTypes)
  .sort().map(i => SpreadTypes[i]);

