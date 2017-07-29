/* @flow */

import { MAJOR_ARCANA } from '../deck';
import { ARCANA } from '../arcana/arcana.data';
import { SPREADS } from '../spreads/spreads.data';

export class AppDataService {
  static getDeck() {
    return MAJOR_ARCANA;
  }

  static getArcana() {
    return ARCANA;
  }

  static getSpreads() {
    return SPREADS;
  }
}
