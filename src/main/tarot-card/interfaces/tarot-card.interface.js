/* @flow */

import { TArcanaType } from '../../tarot-deck/types/arcana.type';

export interface ITarotCard {
  +id: number;
  +rank: string | number;
  +numeral: string;
  +arcana: TArcanaType;
  +name: string;
  +description: string;
}
