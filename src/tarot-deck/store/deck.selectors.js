/* @flow */

import type { TDeck } from '../types/deck.type';
import { IAppData } from '../../appData/store/app-data.interfaces';
import { createSelector } from 'reselect';
import { appDataSelector } from '../../appData/store/app-data.selectors';
import { IArcana } from '../types/arcana.interface';
import { IDeckByArcana } from '../types/deck-by-arcana.interface';

export const deckSelector = createSelector(
  [appDataSelector],
  (appData: IAppData): TDeck => appData.deck
);

export const arcanaSelector = createSelector(
  [appDataSelector],
  (appData: IAppData): TDeck => appData.arcana
);

export const deckByArcanaSelector = createSelector(
  [deckSelector, arcanaSelector],
  (deck: TDeck, arcana: Array<IArcana>): Array<IDeckByArcana> =>
    arcana.map(arcana => ({
      ...arcana,
      cards: deck.filter(card => card.arcana === arcana.type)
    }))
);
