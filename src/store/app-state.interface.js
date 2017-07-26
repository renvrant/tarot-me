/* @flow */

import { ITarotCard } from '../main/tarot-card/interfaces/tarot-card.interface';
import { IDrawnSpread } from '../main/tarot-spread/interfaces/drawn-spread.interface';
import { IArchivedSpread } from '../main/tarot-history/interfaces/tarot-history.interface';

export interface IAppState {
  +deck: Array<ITarotCard>;
  +spread: IDrawnSpread;
  +spreadHistory?: Array<IArchivedSpread>;
}
