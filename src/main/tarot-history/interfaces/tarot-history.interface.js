/* @flow */

import { IActiveSpread } from '../../tarot-spread/interfaces/active-spread.interface';

export interface IArchivedSpread extends IActiveSpread {
  +date: Date;
}
