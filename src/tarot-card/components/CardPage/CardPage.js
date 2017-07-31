/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { IArcana } from '../../../tarot-deck/types/arcana.interface';
import TarotCardFace from '../TarotCardFace/TarotCardFace';
import CardReadingLinks from '../CardReadingLinks/CardReadingLinks';

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
      <CardReadingLinks card={card} />
    </article>
  );
};

export default CardPage;
