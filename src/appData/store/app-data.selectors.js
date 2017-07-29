/* @flow */

import {IAppState} from '../../root/types/app-state.interface';
import {IAppData} from './app-data.interfaces';
import {createSelector} from 'reselect';

export const appDataSelector = (state: IAppState) => state.appData;

export const appLoadingSelector = createSelector(
  [appDataSelector],
  (appData: IAppData): boolean => appData.isLoading,
);
