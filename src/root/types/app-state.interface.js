/* @flow */

import { ISpread } from '../../tarot-spread/types/spread.interfaces';
import type { TArchive } from '../../tarot-archive/types/archive.type';
import { IAppData } from '../../appData/store/app-data.interfaces';

export interface IAppState {
  +appData: IAppData,
  +spread: ISpread,
  +archive: TArchive
}
