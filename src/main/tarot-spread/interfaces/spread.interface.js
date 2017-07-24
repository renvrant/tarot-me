/* @flow */

import type { TSpreadType } from '../types/spread.types';

export interface ISpread {
  +type: TSpreadType;
  +title: string;
  +totalCards: number;
  +cardPositions: Map<number, string>;
}
