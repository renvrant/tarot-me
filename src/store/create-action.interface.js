/* flow */

import { Action } from 'redux';

export interface IPayloadAction extends Action {
  +type: string;
  +payload?: any;
}

export function createAction(type: string, payload?: any): IPayloadAction {
  return { type, payload };
}
