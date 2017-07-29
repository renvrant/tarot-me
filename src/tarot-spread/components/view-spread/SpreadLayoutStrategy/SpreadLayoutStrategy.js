/* @flow */

import React from 'react';
import { SpreadLayouts } from '../../../types/spread.types';
import type { TSpreadLayout } from '../../../types/spread.types';
import LineSpread from '../LineSpread/LineSpread';
import { ISpread } from '../../../types/spread.interfaces';
import NoResults from '../../../../core/components/NoResults/NoResults';

const getLayoutStrategies = (): { [key: TSpreadLayout]: () => any } => {
  const spreadLayoutStrategies = {};
  spreadLayoutStrategies[SpreadLayouts.line] = LineSpread;
  spreadLayoutStrategies[SpreadLayouts.pyramid] = LineSpread;
  spreadLayoutStrategies[SpreadLayouts.cross] = LineSpread;
  return spreadLayoutStrategies;
};

const getSpreadLayoutComponent = (layout: TSpreadLayout) =>
  getLayoutStrategies()[layout] || NoResults;

export const SpreadLayoutStrategy = (props: { spread: ISpread }) => {
  const { spread } = props;
  const LayoutComponent = getSpreadLayoutComponent(
    spread.spreadMetadata.layout
  );
  return <LayoutComponent {...props} />;
};
