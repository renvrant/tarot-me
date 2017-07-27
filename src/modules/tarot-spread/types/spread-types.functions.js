/* @flow */

import {SpreadTypesList} from './spread.types';
import type {TSpreadType} from './spread.types';
import {ISpread} from './spread.interface';

export function getSpreadConfigByType(type: TSpreadType): ?ISpread {
  return SpreadTypesList.find(spread => spread.type === type);
}
