/* @flow */
import { AppDataActions } from './app-data.actions';
import {IPayloadAction} from '../../root/types/create-action.interface';
import {IAppData} from './app-data.interfaces';
import {getAppDataInitialState} from './app-data.functions';

export const appDataReducer = (
  state: IAppData = getAppDataInitialState(),
  action: IPayloadAction,
): IAppData => {
  switch (action.type) {
    case AppDataActions.RETRIEVE_APP_DATA:
      return {
        ...state,
        isLoading: true,
      };
    case AppDataActions.RETRIEVE_DECK:
      return {
        ...state,
        deck: action.payload.deck,
      };
    case AppDataActions.RETRIEVE_ARCANA:
      return {
        ...state,
        arcana: action.payload.arcana,
      };
    case AppDataActions.RETRIEVE_SPREADS:
      return {
        ...state,
        spreadMetadata: action.payload.spreadMetadata,
      };
    case AppDataActions.RETRIEVE_APP_DATA_COMPLETE:
      return {
        ...state,
        isLoading: false,
      }
    default:
      return state;
  }
};
