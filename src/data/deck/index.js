/* flow */

import { MAJOR_ARCANA } from './major-arcana';
import {ITarotCard} from '../../main/tarot-card/interfaces/tarot-card.interface';

export const getTarotDeck = (): Array<ITarotCard> => MAJOR_ARCANA;
