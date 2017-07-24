/* @flow */

import type { TSpreadType, TSpreadCards } from '../types/spread.types';

export interface IActiveSpread {
  +type: TSpreadType;
  +cards: TSpreadCards;
}
