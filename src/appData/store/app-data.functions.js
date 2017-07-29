/* @flow */

import { IAppData } from './app-data.interfaces';

export const getAppDataInitialState = (): IAppData => ({
  isLoading: false,
  deck: [],
  arcana: [],
  spreadMetadata: []
});
