/* flow */

import type { TArcanaType } from '../types/arcana.type';

export interface IArcana {
  +title: string;
  +type: TArcanaType;
  +description: string;
  +minor: boolean;
}
