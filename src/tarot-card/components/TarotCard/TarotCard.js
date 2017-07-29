/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { cardIcons } from '../../../assets/card-icons';

const TarotCard = ({ card }: { card: ITarotCard }) =>
  <section>
    <h2>
      {card.numeral}. {card.name}
    </h2>
    <img src={cardIcons[`${card.arcana}${card.rank}`]} alt={card.name} />
    <p>
      {card.description}
    </p>
  </section>;

export default TarotCard;
