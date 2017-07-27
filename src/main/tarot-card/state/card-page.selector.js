/* @flow */

import { createSelector } from 'reselect';
import {TArcanaType} from '../../tarot-deck/types/arcana.type';
import {ITarotCard} from '../interfaces/tarot-card.interface';
import { deckSelector } from '../../tarot-deck/store/deck.selectors';
import {IAppState} from '../../../store/app-state.interface';
import type {TDeck} from '../../tarot-deck/types/deck.type';

export const routeParamSelector = (state: IAppState, match: any) => match.params;

export const cardPageSelector = createSelector(
  [deckSelector, routeParamSelector],
  (deck: TDeck, params: { rank: string, arcana: TArcanaType }) =>
    deck.find((card: ITarotCard) => card.arcana === params.arcana && card.rank === params.rank)
);
