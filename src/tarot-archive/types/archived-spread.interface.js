/* @flow */

import { ISpread } from '../../tarot-spread/types/spread.interfaces';

export interface IArchivedSpread extends ISpread {
  +date: Date
}
