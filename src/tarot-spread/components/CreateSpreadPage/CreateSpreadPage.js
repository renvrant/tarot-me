/* @flow */
import React from 'react';
import {ISpreadMetadata} from '../../types/spread.interfaces';
import type {TSpreadType} from '../../types/spread.types';

const CreateSpreadPage = ({ spreads, createSpread }: {
  spreads: Array<ISpreadMetadata>,
  createSpread: (type: TSpreadType) => any
}) => (
  <article>
    <h2>Spreads</h2>
    {spreads.map((spread: ISpreadMetadata) => (
      <button onClick={() => createSpread(spread.type)} key={spread.type}>
        New {spread.title} Spread
      </button>
    ))}
  </article>
);

export default CreateSpreadPage;
