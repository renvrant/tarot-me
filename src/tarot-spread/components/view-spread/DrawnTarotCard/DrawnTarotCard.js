/* @flow */
import React from 'react';
import CardFace from '../../../../tarot-card/components/TarotCardFace/TarotCardFace';
import CardBack from '../../../../tarot-card/components/TarotCardBack/TarotCardBack';
import { ISpreadCard } from '../../../types/spread.interfaces';
import './DrawnTarotCard.css';
import { IPayloadAction } from '../../../../root/types/create-action.interface';

const DrawnTarotCard = ({
  drawnCard,
  flipCard
}: {
  drawnCard: ISpreadCard,
  flipCard: ISpreadCard => IPayloadAction
}) => {
  let { flipped } = drawnCard.orientation;
  return (
    <div
      className={`tc-drawn tc-hw ${flipped ? 'flipped' : ''}`}
      onClick={() => flipCard(drawnCard)}
    >
      <CardFace card={drawnCard.card} />
      <CardBack />
    </div>
  );
};

export default DrawnTarotCard;
