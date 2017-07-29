/* @flow */
import React from 'react';
import SpreadLayout from '../SpreadLayout/SpreadLayout';
import {ISpread} from '../../types/spread.interfaces';

const SpreadPage = ({ createSpread, currentSpread }: { createSpread: any, currentSpread: ISpread}) => (
  <article>
    <h2>Spreads</h2>
    {/*{SpreadTypesList.map(spread => (*/}
    {/*<button onClick={() => createSpread(spread.type)} key={spread.type}>*/}
    {/*New {spread.title} Spread*/}
    {/*</button>*/}
    {/*))}*/}

    {/*<SpreadLayout spread={currentSpread} />*/}
  </article>
);

export default SpreadPage;
