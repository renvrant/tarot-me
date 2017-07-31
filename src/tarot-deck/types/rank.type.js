/* @flow */

export type TCourtRankType = 'Ace' | 'Page' | 'Knight' | 'Queen' | 'King';

export const CourtRankType: { [key: TCourtRankType]: TCourtRankType } = {
  Ace: 'Ace',
  Page: 'Page',
  Knight: 'Knight',
  Queen: 'Queen',
  King: 'King'
};
