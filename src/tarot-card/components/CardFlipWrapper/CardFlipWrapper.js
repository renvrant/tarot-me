/* @flow */
import React from 'react';
import type { Children } from 'react';
import { Link } from 'react-router-dom';
import { ISpreadCard } from '../../../tarot-spread/types/spread.interfaces';
import { getCardPagePath } from '../../../root/app.routes';
import { IPayloadAction } from '../../../root/types/create-action.interface';

type PropTypes = {
  drawnCard: ISpreadCard,
  flipCard: ISpreadCard => IPayloadAction,
  children: Children
};

const CardFlipWrapper = ({ drawnCard, flipCard, children }: PropTypes) =>
  !drawnCard.orientation.flipped
    ? <div onClick={() => flipCard(drawnCard)}>
        {children}
      </div>
    : <Link to={getCardPagePath(drawnCard.card)}>
        {' '}{children}
      </Link>;

export default CardFlipWrapper;
