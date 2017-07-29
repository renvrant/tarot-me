/* @flow */

export const SpreadTypes: { [key: TSpreadType]: TSpreadType } = {
  Daily: 'Daily',
  PastPresentFuture: 'PastPresentFuture',
  ThinkFeelDo: 'ThinkFeelDo',
};

export type TSpreadType = 'Daily' | 'PastPresentFuture' | 'ThinkFeelDo';
