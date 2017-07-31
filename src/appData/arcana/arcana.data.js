/* @flow */
import { IArcana } from '../../tarot-deck/types/arcana.interface';

export const ARCANA: Array<IArcana> = [
  {
    type: 'major',
    title: 'Major Arcana',
    minor: false,
    element: 'Spirit',
    description: 'Concerned with the personal journey to wisdom and fulfilment'
  },
  {
    type: 'wands',
    title: 'Wands',
    minor: true,
    element: 'Fire',
    description: 'Concerned with the spirit, inspiration, and drive'
  },
  {
    type: 'cups',
    title: 'Cups',
    minor: true,
    element: 'Water',
    description: 'Concerned with emotions, relationships, and intuition'
  },
  {
    type: 'swords',
    title: 'Swords',
    minor: true,
    element: 'Air',
    description: 'Concerned with the mind, reason, and truth'
  },
  {
    type: 'coins',
    title: 'Coins',
    minor: true,
    element: 'Earth',
    description: 'Concerned with the body, money, and community'
  }
];
