/* @flow */
import React from 'react';
import DrawnTarotCard from '../DrawnTarotCard/DrawnTarotCard';
import { ISpread, ISpreadCard } from '../../../types/spread.interfaces';
import './LineSpread.css';
import { IPayloadAction } from '../../../../root/types/create-action.interface';
import CardSpreadPosition from '../CardSpreadPosition/CardSpreadPosition';

type PropTypes = {
  spread: ISpread,
  flipCard: ISpreadCard => IPayloadAction
};

const LineSpread = ({ spread, flipCard }: PropTypes) =>
  <section className="line-spread">
    {spread.cards.map((drawnCard: ISpreadCard) =>
      <CardSpreadPosition drawnCard={drawnCard} key={drawnCard.position.index}>
        <DrawnTarotCard drawnCard={drawnCard} flipCard={flipCard} />
      </CardSpreadPosition>
    )}
  </section>;

export default LineSpread;
