/* @flow */
import React from 'react';
import SpreadLayout from '../SpreadLayout/SpreadLayout';
import {IDrawnSpread} from '../../types/drawn-spread.interface';
import { SpreadTypesList } from '../../types/spread.types';

const SpreadPage = ({ createSpread, currentSpread }: { createSpread: any, currentSpread: IDrawnSpread}) => (
  <article>
    <h2>Spreads</h2>
    {SpreadTypesList.map(spread => (
      <button onClick={() => createSpread(spread.type)} key={spread.type}>
        New {spread.title} Spread
      </button>
    ))}

    <SpreadLayout spread={currentSpread} />
  </article>
);

export default SpreadPage;
