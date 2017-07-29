/* @flow */
import React from 'react';
import DrawnTarotCard from '../DrawnTarotCard/DrawnTarotCard';
import { ISpread, ISpreadCard } from '../../../types/spread.interfaces';
import './LineSpread.css';

const LineSpread = ({ spread }: { spread: ISpread }) =>
  <section className="line-spread">
    {spread.cards.map((drawnCard: ISpreadCard) =>
      <DrawnTarotCard drawnCard={drawnCard} key={drawnCard.position.index} />
    )}
  </section>;

export default LineSpread;
