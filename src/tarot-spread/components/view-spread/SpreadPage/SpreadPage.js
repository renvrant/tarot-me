/* @flow */
import React from 'react';
import { ISpread } from '../../../types/spread.interfaces';
import { SpreadLayoutStrategy } from '../SpreadLayoutStrategy/SpreadLayoutStrategy';

const SpreadPage = ({ spread }: { spread: ISpread }) =>
  <article>
    <h2>
      {spread.spreadMetadata.title}
    </h2>
    <SpreadLayoutStrategy spread={spread} />
  </article>;

export default SpreadPage;
