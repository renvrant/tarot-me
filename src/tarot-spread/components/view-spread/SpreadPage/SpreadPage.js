/* @flow */
import React from 'react';
import { ISpread } from '../../../types/spread.interfaces';
import { SpreadLayoutStrategy } from '../SpreadLayoutStrategy/SpreadLayoutStrategy';

const SpreadPage = ({
  spread,
  flipCard
}: {
  spread: ISpread,
  flipCard: () => any
}) =>
  <article>
    <h2>
      {spread.spreadMetadata.title}
    </h2>
    <SpreadLayoutStrategy spread={spread} flipCard={flipCard} />
  </article>;

export default SpreadPage;
