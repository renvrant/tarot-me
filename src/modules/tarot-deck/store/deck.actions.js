/* @flow */

import { IPayloadAction} from '../../root/types';
import { createAction } from '../../root/store';

export class DeckActions {
  static RETRIEVE = 'DECK_RETRIEVE';

  static retrieve(): () => IPayloadAction {
    return () => createAction(DeckActions.RETRIEVE);
  }
}
