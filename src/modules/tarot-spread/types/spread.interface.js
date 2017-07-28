/* @flow */

import type { TSpreadType } from './spread.types';

export interface ISpread {
  +type: TSpreadType;
  +title: string;
  +totalCards: number;
  +cardPositions: Map<number, string>;
}
// Add spreadLayout property
