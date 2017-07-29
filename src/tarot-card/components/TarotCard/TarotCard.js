/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';

const TarotCard = ({ card }: { card: ITarotCard }) => {
  return (
    <article>
      <h2>
        {card.numeral}. {card.name}
      </h2>
      <p>
        {card.description}
      </p>
    </article>
  );
};

export default TarotCard;
