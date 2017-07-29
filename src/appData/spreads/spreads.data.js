/* @flow */

import { ISpreadMetadata } from '../../tarot-spread/types/spread.interfaces';
import {
  SpreadTypes,
  SpreadLayouts
} from '../../tarot-spread/types/spread.types';

export const SPREADS: Array<ISpreadMetadata> = [
  {
    type: SpreadTypes.daily,
    title: 'Daily Card',
    description: 'For reflection on your day',
    totalCards: 1,
    layout: SpreadLayouts.line,
    positions: [
      {
        title: 'Your Daily Card',
        index: 1
      }
    ]
  },
  {
    type: SpreadTypes.pastPresentFuture,
    title: 'Past, Present, Future',
    description: 'For evaluating a situation',
    totalCards: 3,
    layout: SpreadLayouts.line,
    positions: [
      {
        title: 'Past',
        index: 1
      },
      {
        title: 'Present',
        index: 2
      },
      {
        title: 'Future',
        index: 3
      }
    ]
  },
  {
    type: SpreadTypes.thinkFeelDo,
    title: 'Think, Feel, Do',
    description: 'For evaluating a situation',
    totalCards: 3,
    layout: SpreadLayouts.line,
    positions: [
      {
        title: 'What I Think',
        index: 1
      },
      {
        title: 'How I Feel',
        index: 2
      },
      {
        title: 'What to Do',
        index: 3
      }
    ]
  }
];
