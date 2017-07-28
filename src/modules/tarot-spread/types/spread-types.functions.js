/* @flow */

import {SpreadTypesList} from './spread.types';
import type {TSpreadType} from './spread.types';
import {ISpread} from './spread.interface';

export function getSpreadConfigByType(type: TSpreadType): ?ISpread {
  return SpreadTypesList.find(spread => spread.type === type);
}

export function getTotalCardsBySpreadType(type: TSpreadType): number {
  return getSpreadConfigByType(type) ? getSpreadConfigByType(type).totalCards : 0;
}

export function getSpreadPositionInfo(type: TSpreadType, position: number): string {
  return getSpreadConfigByType(type).cardPositions.get(position);
}
