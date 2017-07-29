/* @flow */

import { Action } from 'redux';

export interface IPayloadAction extends Action {
  +type: string;
  +payload?: any;
}
