/* @flow */

import type { TSpreadType, TSpreadLayout } from './spread.types';
import { ITarotCard } from '../../tarot-card/types/tarot-card.interface';

export interface ISpreadPosition {
  +title: string,
  +index: number
}

export interface ISpreadMetadata {
  +type: TSpreadType,
  +title: string,
  +totalCards: number,
  +layout: TSpreadLayout,
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
  +spreadMetadata: ISpreadMetadata,
  +cards: Array<ISpreadCard>
}
