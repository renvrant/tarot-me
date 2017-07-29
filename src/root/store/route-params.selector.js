/* @flow */

import { IAppState } from '../types/app-state.interface';

export const routeParamsSelector = (state: IAppState, match: { params: any }) =>
  match.params;
