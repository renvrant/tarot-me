/* @flow */

import { IDrawnSpread } from '../../tarot-spread/types/drawn-spread.interface';

export interface IArchivedSpread extends IDrawnSpread {
  +date: Date;
}
