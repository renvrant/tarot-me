/* flow */

import { MAJOR_ARCANA } from './major-arcana';
import {ITarotCard} from '../../modules/tarot-card/types/tarot-card.interface';

export const getTarotDeck = (): Array<ITarotCard> => MAJOR_ARCANA;
