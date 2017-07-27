/* @flow */

import {createAction, IPayloadAction} from '../../../store/create-action.interface';

export class DeckActions {
  static RETRIEVE = 'DECK_RETRIEVE';

  static retrieve(): IPayloadAction {
    return createAction(DeckActions.RETRIEVE);
  }
}
