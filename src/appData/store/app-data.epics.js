/* @flow */

import { AppDataActions } from './app-data.actions';
import { ActionsObservable } from 'redux-observable';
import { AppDataService } from '../services/app-data.service';
import { IPayloadAction } from '../../root/types';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';

export const retrieveAppDataEpic = (
  action$: ActionsObservable<IPayloadAction>
) => {
  return action$.ofType(AppDataActions.RETRIEVE_APP_DATA).mergeMap(() => {
    return Observable.from([
      AppDataActions.retrieveDeck(AppDataService.getDeck()),
      AppDataActions.retrieveArcana(AppDataService.getArcana()),
      AppDataActions.retrieveSpreads(AppDataService.getSpreads()),
      AppDataActions.retrieveComplete()
    ]);
  });
};
