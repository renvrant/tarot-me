/* @flow */

import { IDrawnSpread } from '../../tarot-spread/interfaces/drawn-spread.interface';

export interface IArchivedSpread extends IDrawnSpread {
  +date: Date;
}
