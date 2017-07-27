/* @flow */

import { IDrawnSpread } from '../../tarot-spread/types/drawn-spread.interface';
import type {TDeck} from '../../tarot-deck/types/deck.type';
import type {TArchive} from '../../tarot-archive/types/archive.type';

export interface IAppState {
  +deck: TDeck;
  +spread: IDrawnSpread;
  +archive?: TArchive;
}
