/* flow */

import { IPayloadAction } from '../../root/types/create-action.interface';
import { TSpreadType } from '../types/spread.types';
import { ITarotCard } from '../../tarot-card/types/tarot-card.interface';
import {createAction} from '../../root/store/store.functions';
import {ISpreadMetadata} from '../types/spread.interfaces';

export class SpreadActions {
  static CLEAR = 'SPREAD_CLEAR';
  static DRAW = 'SPREAD_DRAW';
  static CREATE = 'SPREAD_CREATE';

  static create(spreadMetadata: ISpreadMetadata): IPayloadAction {
    return createAction(SpreadActions.CREATE, { spreadMetadata });
  }

  static draw(cards: Map<number, ITarotCard>): IPayloadAction {
    return createAction(SpreadActions.DRAW, { cards });
  }

  static clear(): IPayloadAction {
    return createAction(SpreadActions.CLEAR);
  }
}
