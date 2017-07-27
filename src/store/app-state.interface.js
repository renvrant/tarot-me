/* @flow */

import { IDrawnSpread } from '../main/tarot-spread/types/drawn-spread.interface';
import { IArchivedSpread } from '../main/tarot-history/types/tarot-history.interface';
import type {TDeck} from '../main/tarot-deck/types/deck.type';

export interface IAppState {
  +deck: TDeck;
  +spread: IDrawnSpread;
  +spreadHistory?: Array<IArchivedSpread>;
}
