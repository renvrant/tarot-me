/* @flow */

export type TSpreadType = 'daily' | 'pastPresentFuture' | 'thinkFeelDo';

export type TSpreadLayout = 'line' | 'pyramid' | 'cross';

export const SpreadTypes: { [key: TSpreadType]: TSpreadType } = {
  daily: 'daily',
  pastPresentFuture: 'pastPresentFuture',
  thinkFeelDo: 'thinkFeelDo'
};

export const SpreadLayouts: { [key: TSpreadLayout]: TSpreadLayout } = {
  line: 'line',
  pyramid: 'pyramid',
  cross: 'cross'
};
