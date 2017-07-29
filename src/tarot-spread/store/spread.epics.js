/* flow */
import { SpreadActions } from './spread.actions';
import { ActionsObservable } from 'redux-observable';
import { Store } from 'redux';
import { IAppState, IPayloadAction } from '../../root/types';
import { drawCardsForSpread } from './spread.functions';
import 'rxjs/add/operator/map';
import { ISpreadMetadata } from '../types/spread.interfaces';

export const createSpreadEpic = (
  action$: ActionsObservable<IPayloadAction>,
  store: Store<IAppState>
) => {
  return action$
    .ofType(SpreadActions.CREATE)
    .map(() =>
      SpreadActions.draw(
        drawCardsForSpread(
          store
            .getState()
            .appData.spreadMetadata.find(
              (spread: ISpreadMetadata) =>
                spread.type === store.getState().spread.type
            ),
          store.getState().appData.deck
        )
      )
    );
};
