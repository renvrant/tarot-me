/* @flow */

import type { TDeck } from '../types/deck.type';
import { IAppData } from '../../appData/store/app-data.interfaces';
import { createSelector } from 'reselect';
import { appDataSelector } from '../../appData/store/app-data.selectors';

export const deckSelector = createSelector(
  [appDataSelector],
  (appData: IAppData): TDeck => appData.deck
);

export const arcanaSelector = createSelector(
  [appDataSelector],
  (appData: IAppData): TDeck => appData.arcana
);
