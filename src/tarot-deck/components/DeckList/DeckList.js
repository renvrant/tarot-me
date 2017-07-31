/* @flow */
import React from 'react';
import { Link } from 'react-router-dom';
import { getCardPagePath } from '../../../root/app.routes';
import { ITarotCard } from '../../../tarot-card/types/tarot-card.interface';
import { IDeckByArcana } from '../../types/deck-by-arcana.interface';

type PropTypes = { deckByArcana: Array<IDeckByArcana> };

const DeckList = ({ deckByArcana }: PropTypes) =>
  <article>
    {deckByArcana.map((arcana: IDeckByArcana) =>
      <section key={arcana.type}>
        <header>
          <h2 className="f1 ttu mh5 mb0">
            {arcana.title}
          </h2>
          <p className="mh5 i mv0">
            Element of {arcana.element}
          </p>
          <p className="mh5 f3 mv2">
            {arcana.description}
          </p>
        </header>
        <ul className="list bg-black pa5 columns3 white">
          {arcana.cards.length > 0
            ? arcana.cards.map((card: ITarotCard) =>
                <li key={card.id} className="dim mb3">
                  <Link
                    to={getCardPagePath(card)}
                    className="link white db ttu"
                  >
                    {card.numeral}. {card.name}
                  </Link>
                </li>
              )
            : <li>Work in Progress...</li>}
        </ul>
      </section>
    )}
  </article>;

export default DeckList;
