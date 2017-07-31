/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { IArcana } from '../../../tarot-deck/types/arcana.interface';
import TarotCardFace from '../TarotCardFace/TarotCardFace';
import CardMeaningLinks from '../CardMeaningLinks/CardMeaningLinkList';
import './CardPage.css';

type PropTypes = { card: ITarotCard, arcana: IArcana };

const CardPage = ({ card, arcana }: PropTypes) => {
  return (
    <article className="flex h-100 card-page absolute top-0 z-0">
      <aside className="bg-black flex-auto flex items-center justify-center mw7 ph4">
        <TarotCardFace card={card} />
      </aside>
      <section className="flex-auto flex flex-column justify-center ph5">
        <h2 className="f1 mt0 ttu lh-title">
          {card.numeral}. {card.name}
        </h2>
        <p className="f3 bt bw2 b--black mt0 pt4 ">
          {card.description}
        </p>
        <h3 className="tr f4 normal i">
          {arcana.title}
        </h3>
        <CardMeaningLinks card={card} />
      </section>
    </article>
  );
};

export default CardPage;
