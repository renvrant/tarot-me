/* @flow */
import React from 'react';
import DrawnTarotCard from '../DrawnTarotCard/DrawnTarotCard';
import { ISpread, ISpreadCard } from '../../../types/spread.interfaces';

const LineSpread = ({ spread }: { spread: ISpread }) =>
  <section>
    {spread.cards.map((drawnCard: ISpreadCard) =>
      <DrawnTarotCard drawnCard={drawnCard} key={drawnCard.position.index} />
    )}
  </section>;

export default LineSpread;
