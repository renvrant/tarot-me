/* flow */

import { createSelector } from 'reselect';
import {TArcanaType} from '../../tarot-deck/types/arcana.type';
import {ITarotCard} from '../interfaces/tarot-card.interface';
import { deckSelector } from '../../tarot-deck/store/deck.selectors';

export const routeParamSelector = (state, match) => match.params;

export const cardPageSelector = createSelector(
  [deckSelector, routeParamSelector],
  (deck: Array<ITarotCard>, params: { rank: string, arcana: TArcanaType }) =>
    deck.find((card: ITarotCard) => card.arcana === params.arcana && card.rank === params.rank)
);
