/* @flow */

import type {TSpreadType} from '../types/spread.types';
import {getTotalCardsBySpreadType} from '../types/spread-types.functions';

export const getSpreadLayoutComponent = (spreadType: TSpreadType) => {
  switch (getTotalCardsBySpreadType(spreadType)) {
    case 1:
      return 'Single';
    case 3:
      return 'Three';
    case 10:
      return '10';
    default:
      return null;
  }
};
