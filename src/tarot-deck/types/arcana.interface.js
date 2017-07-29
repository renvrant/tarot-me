/* @flow */

import type { TArcanaType } from './arcana.type';

export interface IArcana {
  +title: string,
  +type: TArcanaType,
  +description: string,
  +element: string,
  +minor: boolean
}
