/* @flow */

import type { TSpreadType, TSpreadCardList } from '../types/spread.types';

export interface IDrawnSpread {
  +type: TSpreadType;
  +cards: TSpreadCardList;
}
