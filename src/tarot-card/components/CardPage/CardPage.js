/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { IArcana } from '../../../tarot-deck/types/arcana.interface';
import TarotCard from '../TarotCard/TarotCard';

const CardPage = ({ card, arcana }: { card: ITarotCard, arcana: IArcana }) => {
  return (
    <article>
      <TarotCard card={card} />
      <h3>
        {arcana.title}
      </h3>
    </article>
  );
};

export default CardPage;
