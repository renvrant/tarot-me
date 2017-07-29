/* @flow */
import React from 'react';
import DrawnTarotCard from '../DrawnTarotCard/DrawnTarotCard';
import {ISpread, ISpreadCard} from '../../types/spread.interfaces';

const SpreadLayout = ({ spread }: { spread: ISpread}) => (
  <section>
    <h2>Spread</h2>
    { spread.cards.map((drawnCard: ISpreadCard) => (
      <DrawnTarotCard drawnCard={drawnCard} key={drawnCard.position.index} />
    )) }
  </section>
);

export default SpreadLayout;
