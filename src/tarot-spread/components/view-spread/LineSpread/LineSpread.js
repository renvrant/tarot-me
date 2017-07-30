/* @flow */
import React from 'react';
import DrawnTarotCard from '../DrawnTarotCard/DrawnTarotCard';
import { ISpread, ISpreadCard } from '../../../types/spread.interfaces';
import './LineSpread.css';

const LineSpread = ({
  spread,
  flipCard
}: {
  spread: ISpread,
  flipCard: () => any
}) =>
  <section className="line-spread">
    {spread.cards.map((drawnCard: ISpreadCard) =>
      <div key={drawnCard.position.index}>
        <h3 className="tc">
          {drawnCard.position.title}
        </h3>
        <DrawnTarotCard drawnCard={drawnCard} flipCard={flipCard} />
      </div>
    )}
  </section>;

export default LineSpread;
