/* @flow */

import {IAppState} from '../../../store/app-state.interface';
import type {TDeck} from '../types/deck.type';

export const deckSelector = (state: IAppState): TDeck => state.deck;
