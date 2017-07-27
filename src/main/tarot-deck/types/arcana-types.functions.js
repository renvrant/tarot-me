/* flow */

import { ArcanaTypesList, TArcanaType } from './arcana.type'
import { IArcana } from '../interfaces/arcana.interface';

export function getArcanaByType(type: TArcanaType): ?IArcana {
  return ArcanaTypesList.find(arcana => arcana.type === type);
}

export function getArcanaNameByType(type: TArcanaType): ?string {
  return getArcanaByType(type).name;
}
