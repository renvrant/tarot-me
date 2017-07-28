/* @flow */
import React from 'react';
import {IDrawnCard} from '../../../tarot-card/types/drawn-card.interface';
import TarotCard from '../../../tarot-card/components/TarotCard/TarotCard';

const DrawnTarotCard = ({card, positionTitle}: { card: IDrawnCard, positionTitle: string }) => (
  <div>
    <h3>{positionTitle}</h3>
    <TarotCard card={card}/>
    { card.reversed ? <h4>Reversed</h4> : null }
  </div>
);

export default DrawnTarotCard;
