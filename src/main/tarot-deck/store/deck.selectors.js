/* flow */

import {IAppState} from '../../../store/app-state.interface';

export const deckSelector = (state: IAppState) => state.deck;
