/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { IArcana } from '../../../tarot-deck/types/arcana.interface';

const CardPage = ({ card, arcana }: { card: ITarotCard, arcana: IArcana }) => {
  return (
    <article>
      <h2>
        {card.numeral}. {card.name}
      </h2>
      <h3>
        {arcana.title}
      </h3>
      <p>
        {card.description}
      </p>
    </article>
  );
};

export default CardPage;
