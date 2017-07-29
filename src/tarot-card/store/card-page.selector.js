/* @flow */

import { createSelector } from 'reselect';
import { TArcanaType } from '../../tarot-deck/types/arcana.type';
import { ITarotCard } from '../types/tarot-card.interface';
import {
  arcanaSelector,
  deckSelector
} from '../../tarot-deck/store/deck.selectors';
import type { TDeck } from '../../tarot-deck/types/deck.type';
import { routeParamsSelector } from '../../root/store/route-params.selector';
import { IArcana } from '../../tarot-deck/types/arcana.interface';

export const cardPageCardSelector = createSelector(
  [deckSelector, routeParamsSelector],
  (deck: TDeck, params: { rank: string, arcana: TArcanaType }) =>
    deck.find(
      (card: ITarotCard) =>
        card.arcana === params.arcana && card.rank === params.rank
    )
);

export const cardPageArcanaSelector = createSelector(
  [arcanaSelector, routeParamsSelector],
  (arcana: Array<IArcana>, params: { arcana: TArcanaType }) =>
    arcana.find(
      (currentArcana: IArcana) => currentArcana.type === params.arcana
    )
);
