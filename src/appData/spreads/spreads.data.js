/* @flow */

import { ISpreadMetadata } from '../../tarot-spread/types/spread.interfaces';

export const SPREADS: Array<ISpreadMetadata> = [
  {
    type: 'Daily',
    title: 'Daily Card',
    description: 'For reflection on your day',
    totalCards: 1,
    layout: null,
    positions: [
      {
        title: 'Your Daily Card',
        index: 1
      }
    ]
  },
  {
    type: 'PastPresentFuture',
    title: 'Past, Present, Future',
    description: 'For evaluating a situation',
    totalCards: 3,
    layout: null,
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
    type: 'ThinkFeelDo',
    title: 'Think, Feel, Do',
    description: 'For evaluating a situation',
    totalCards: 3,
    layout: null,
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
