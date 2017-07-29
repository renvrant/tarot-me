/* @flow */

import { ISpreadMetadata } from '../../tarot-spread/types/spread.interfaces';
import { IArcana } from '../../tarot-deck/types/arcana.interface';
import type { TDeck } from '../../tarot-deck/types/deck.type';

export interface IAppData {
  +isLoading: boolean,
  +deck: TDeck,
  +arcana: Array<IArcana>,
  +spreadMetadata: Array<ISpreadMetadata>
}
