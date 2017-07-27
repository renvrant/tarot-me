/* flow */

import { ITarotCard } from './tarot-card.interface';

export interface IDrawnCard extends ITarotCard {
  +reversed: boolean;
  +flipped: boolean;
}
