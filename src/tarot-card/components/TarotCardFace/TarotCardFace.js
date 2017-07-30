/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { cardIcons } from '../../../assets/card-icons';
import '../../styles/tarot-card.css';

const TarotCardFace = ({ card }: { card: ITarotCard }) =>
  <div className="tc-face tc-hw tc-bdr-white tc-bdr-half-width bg-white flex br5">
    <div className="tc-inner tc-bdr-black tc-bdr-width br4">
      <img
        src={cardIcons[`${card.arcana}${card.rank}`]}
        alt={card.name}
        className="tc-icon"
      />
    </div>
  </div>;

export default TarotCardFace;
