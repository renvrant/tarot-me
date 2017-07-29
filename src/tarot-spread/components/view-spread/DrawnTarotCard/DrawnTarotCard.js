/* @flow */
import React from 'react';
import TarotCard from '../../../../tarot-card/components/TarotCard/TarotCard';
import { ISpreadCard } from '../../../types/spread.interfaces';

const DrawnTarotCard = ({ drawnCard }: { drawnCard: ISpreadCard }) =>
  <div className="drawn-card">
    <h3>
      {drawnCard.position.title}
    </h3>
    <TarotCard card={drawnCard.card} />
    {drawnCard.orientation.reversed ? <h4>Reversed</h4> : null}
  </div>;

export default DrawnTarotCard;
