/* @flow */

import { ITarotCard } from '../main/tarot-card/interfaces/tarot-card.interface';
import { IActiveSpread } from '../main/tarot-spread/interfaces/active-spread.interface';
import { IArchivedSpread } from '../main/tarot-history/interfaces/tarot-history.interface';

export interface IAppState {
  +deck: Array<ITarotCard>;
  +spread: IActiveSpread;
  +spreadHistory?: Array<IArchivedSpread>;
}
