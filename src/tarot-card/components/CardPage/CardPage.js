/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { IArcana } from '../../../tarot-deck/types/arcana.interface';
import TarotCardFace from '../TarotCardFace/TarotCardFace';

type PropTypes = { card: ITarotCard, arcana: IArcana };

const CardPage = ({ card, arcana }: PropTypes) => {
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
      <TarotCardFace card={card} />
    </article>
  );
};

export default CardPage;
