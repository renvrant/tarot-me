/* flow */
import { SpreadActions } from './spread.actions';
import { ActionsObservable } from 'redux-observable';
import { Store } from 'redux';
import { IPayloadAction } from '../../../store/create-action.interface';
import { IAppState } from '../../../store/app-state.interface';
import { drawCardsForSpread } from './spread.functions';
import 'rxjs/add/operator/map';

export const createSpreadEpic = (action$: ActionsObservable<IPayloadAction>, store: Store<IAppState>) => {
  return action$.ofType(SpreadActions.CREATE)
    .map(() => SpreadActions.draw(
      drawCardsForSpread(
        store.getState().spread.type,
        store.getState().deck
      ),
    ));
};
