/* @flow */

import { IArcana } from './arcana.interface';
import { ITarotCard } from '../../tarot-card/types/tarot-card.interface';

export interface IDeckByArcana extends IArcana {
  +cards: Array<ITarotCard>
}
