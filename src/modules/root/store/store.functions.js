/* @flow */

import {IPayloadAction} from '../types/create-action.interface';

export function createAction(type: string, payload?: any): IPayloadAction {
  return { type, payload };
}
