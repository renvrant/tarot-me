/* @flow */

import { IPayloadAction} from '../../root/types/index';
import { createAction } from '../../root/store/index';
import type {TDeck} from '../../tarot-deck/types/deck.type';
import {IArcana} from '../../tarot-deck/types/arcana.interface';
import {ISpreadMetadata} from '../../tarot-spread/types/spread.interfaces';

export class AppDataActions {
  static RETRIEVE_DECK = 'APP_DATA_RETRIEVE_DECK';
  static RETRIEVE_ARCANA = 'APP_DATA_RETRIEVE_ARCANA';
  static RETRIEVE_SPREADS = 'APP_DATA_RETRIEVE_SPREADS';
  static RETRIEVE_APP_DATA = 'APP_DATA_RETRIEVE_APP_DATA';
  static RETRIEVE_APP_DATA_COMPLETE = 'APP_DATA_RETRIEVE_APP_DATA_COMPLETE';

  static retrieve() {
    return createAction(AppDataActions.RETRIEVE_APP_DATA);
  }

  static retrieveDeck(deck: TDeck): IPayloadAction {
    return createAction(AppDataActions.RETRIEVE_DECK, { deck });
  }

  static retrieveArcana(arcana: Array<IArcana>): IPayloadAction {
    return createAction(AppDataActions.RETRIEVE_ARCANA, { arcana });
  }

  static retrieveSpreads(spreadMetadata: Array<ISpreadMetadata>): IPayloadAction {
    return createAction(AppDataActions.RETRIEVE_SPREADS, { spreadMetadata });
  }

  static retrieveComplete() {
    return createAction(AppDataActions.RETRIEVE_APP_DATA_COMPLETE);
  }
}
