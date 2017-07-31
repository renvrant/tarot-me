/* @flow */
import React from 'react';
import { ISpread } from '../../../types/spread.interfaces';
import { SpreadLayoutStrategy } from '../SpreadLayoutStrategy/SpreadLayoutStrategy';
import { IPayloadAction } from '../../../../root/types/create-action.interface';

type PropTypes = {
  spread: ISpread,
  flipCard: () => IPayloadAction
};

const SpreadPage = ({ spread, flipCard }: PropTypes) =>
  <article>
    <h2>
      {spread.spreadMetadata.title}
    </h2>
    <SpreadLayoutStrategy spread={spread} flipCard={flipCard} />
  </article>;

export default SpreadPage;
