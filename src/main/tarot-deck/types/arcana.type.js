/* flow */

import {IArcana} from '../interfaces/arcana.interface';

export const ArcanaTypes: { [key: string]: IArcana } = {
  major: {
    type: 'major',
    title: 'Major Arcana',
    minor: false,
    description: '',
  },
  cups: {
    type: 'cups',
    title: 'Cups',
    minor: true,
    description: '',
  },
  swords: {
    type: 'swords',
    title: 'Swords',
    minor: true,
    description: '',
  },
  coins: {
    type: 'coins',
    title: 'Coins',
    minor: true,
    description: '',
  },
  wands: {
    type: 'wands',
    title: 'Wands',
    minor: true,
    description: '',
  },
};

export type TArcanaType = $Keys<typeof ArcanaTypes>;

export const ArcanaTypesList: Array<IArcana> = Object.keys(ArcanaTypes).map(i => ArcanaTypes[i]);

export function getArcanaByType(type: TArcanaType): ?IArcana {
  return ArcanaTypesList.find(arcana => arcana.type === type);
}