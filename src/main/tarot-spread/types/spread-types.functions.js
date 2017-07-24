/* flow */

import {SpreadTypesList, TSpreadType} from './spread.types';
import {ISpread} from '../interfaces/spread.interface';

export function getSpreadConfigByType(type: TSpreadType): ?ISpread {
  return SpreadTypesList.find(spread => spread.type === type);
}
