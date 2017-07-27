/* @flow */

import type { TSpreadType, TSpreadCardList } from './spread.types';

export interface IDrawnSpread {
  +type: TSpreadType;
  +cards: TSpreadCardList;
}
