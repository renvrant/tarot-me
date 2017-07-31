/* @flow */
import React from 'react';
import CardFace from '../../../../tarot-card/components/TarotCardFace/TarotCardFace';
import CardBack from '../../../../tarot-card/components/TarotCardBack/TarotCardBack';
import { ISpreadCard } from '../../../types/spread.interfaces';
import './DrawnTarotCard.css';
import { IPayloadAction } from '../../../../root/types/create-action.interface';
import CardFlipWrapper from '../../../../tarot-card/components/CardFlipWrapper/CardFlipWrapper';

type PropTypes = {
  drawnCard: ISpreadCard,
  flipCard: ISpreadCard => IPayloadAction
};

const DrawnTarotCard = ({ drawnCard, flipCard }: PropTypes) =>
  <div
    className={`tc-drawn tc-hw ${drawnCard.orientation.flipped
      ? 'flipped'
      : ''}`}
  >
    <CardFlipWrapper drawnCard={drawnCard} flipCard={flipCard}>
      <CardFace card={drawnCard.card} />
      <CardBack />
    </CardFlipWrapper>
  </div>;

export default DrawnTarotCard;
