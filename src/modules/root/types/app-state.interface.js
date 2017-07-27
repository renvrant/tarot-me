/* @flow */

import { IDrawnSpread } from '../../tarot-spread/types/drawn-spread.interface';
import { IArchivedSpread } from '../../tarot-history/types/tarot-history.interface';
import type {TDeck} from '../../tarot-deck/types/deck.type';

export interface IAppState {
  +deck: TDeck;
  +spread: IDrawnSpread;
  +spreadHistory?: Array<IArchivedSpread>;
}
