/* @flow */
import React from 'react';
import type { Children } from 'react';
import { ISpreadCard } from '../../../types/spread.interfaces';
import './CardSpreadPosition.css';

type PropTypes = {
  drawnCard: ISpreadCard,
  children: Children
};

const CardSpreadPosition = ({ drawnCard, children }: PropTypes) =>
  <div className="tc-spread-position mh3">
    <h3 className="tc white f3">
      {drawnCard.position.title}
    </h3>
    {children}
    <h3
      className={`tc ttu mt2 tc-title ${drawnCard.orientation.flipped
        ? 'shown'
        : 'hidden'}`}
    >
      {drawnCard.card.numeral}. {drawnCard.card.name}
    </h3>
  </div>;

export default CardSpreadPosition;
