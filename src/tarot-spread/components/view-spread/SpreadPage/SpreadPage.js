/* @flow */
import React from 'react';
import { ISpread } from '../../../types/spread.interfaces';
import { SpreadLayoutStrategy } from '../SpreadLayoutStrategy/SpreadLayoutStrategy';
import { IPayloadAction } from '../../../../root/types/create-action.interface';
import SpreadBackdrop from '../SpreadBackdrop/SpreadBackdrop';

type PropTypes = {
  spread: ISpread,
  flipCard: () => IPayloadAction
};

const SpreadPage = ({ spread, flipCard }: PropTypes) =>
  <article className="relative flex flex-column items-center justify-center pv4">
    <SpreadBackdrop />
    <SpreadLayoutStrategy spread={spread} flipCard={flipCard} />
  </article>;

export default SpreadPage;
