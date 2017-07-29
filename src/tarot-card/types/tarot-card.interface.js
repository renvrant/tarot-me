/* @flow */

import type { TArcanaType } from '../../tarot-deck/types/arcana.type';

export interface ITarotCard {
  +id: number,
  +rank: string,
  +numeral: string,
  +arcana: TArcanaType,
  +name: string,
  +description: string
}
