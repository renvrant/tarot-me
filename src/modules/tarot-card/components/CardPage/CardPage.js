/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { getArcanaNameByType } from '../../../tarot-deck/types/arcana-types.functions';

const CardPage = ({ card }: { card: ITarotCard }) => {
  return (
    <article>
      <h2>{card.numeral}. {card.name}</h2>
      <h3>{getArcanaNameByType(card.arcana)}</h3>
      <p>{card.description}</p>
    </article>
  );
};

export default CardPage;