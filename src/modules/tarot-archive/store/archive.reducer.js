/* flow */

import {IArchivedSpread} from '../types/archived-spread.interface';
import {getArchiveInitialState} from './archive.functions';

export const archiveReducer = (state: Array<IArchivedSpread> = getArchiveInitialState(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};
