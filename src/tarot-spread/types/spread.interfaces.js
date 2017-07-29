/* @flow */

import type { TSpreadType } from './spread.types';
import { ITarotCard } from '../../tarot-card/types/tarot-card.interface';

export interface ISpreadPosition {
  +title: string,
  +index: number
}

export interface ISpreadMetadata {
  +type: TSpreadType,
  +title: string,
  +totalCards: number,
  +layout: any, // This will change
  +positions: Array<ISpreadPosition> // This could be a map...
}

export interface ICardOrientation {
  +reversed: boolean,
  +flipped: boolean
}

export interface ISpreadCard {
  +position: ISpreadPosition,
  +card: ITarotCard,
  +orientation: ICardOrientation
}

export interface ISpread {
  +type: TSpreadType,
  +title: string,
  +cards: Array<ISpreadCard>
}
