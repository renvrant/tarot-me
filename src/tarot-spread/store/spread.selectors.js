/* @flow */

import {appDataSelector} from '../../appData/store/app-data.selectors';
import {IAppData} from '../../appData/store/app-data.interfaces';
import {createSelector} from 'reselect';
import {IAppState} from '../../root/types/app-state.interface';

export const spreadMetadataSelector = createSelector(
  [appDataSelector],
  (appData: IAppData) => appData.spreadMetadata
);

export const spreadSelector = (state: IAppState) => state.spread;
