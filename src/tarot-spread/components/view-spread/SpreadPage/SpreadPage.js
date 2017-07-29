/* @flow */
import React from 'react';
import DrawnTarotCard from '../DrawnTarotCard/DrawnTarotCard';
import { ISpread, ISpreadCard } from '../../../types/spread.interfaces';

const SpreadPage = ({ spread }: { spread: ISpread }) =>
  <article>
    <h2>
      {spread.title}
    </h2>
    {spread.cards.map((drawnCard: ISpreadCard) =>
      <DrawnTarotCard drawnCard={drawnCard} key={drawnCard.position.index} />
    )}
  </article>;

export default SpreadPage;
