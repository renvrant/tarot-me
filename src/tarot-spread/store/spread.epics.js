/* flow */
import { SpreadActions } from './spread.actions';
import { ActionsObservable } from 'redux-observable';
import { Store } from 'redux';
import { IAppState, IPayloadAction } from '../../root/types';
import { drawCardsForSpread } from './spread.functions';
import 'rxjs/add/operator/map';

export const createSpreadEpic = (
  action$: ActionsObservable<IPayloadAction>,
  store: Store<IAppState>
) => {
  return action$
    .ofType(SpreadActions.CREATE)
    .map(() =>
      SpreadActions.draw(
        drawCardsForSpread(
          store.getState().spread.spreadMetadata,
          store.getState().appData.deck
        )
      )
    );
};
