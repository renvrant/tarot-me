/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCardPagePath } from '../../../../root/app.routes';
import { ITarotCard } from '../../../tarot-card/interfaces/tarot-card.interface';
import type {TDeck} from '../../types/deck.type';

const DeckPage = ({ deck }: { deck: TDeck }) => (
  <article>
    <h2>Card List</h2>
    {deck.map((card: ITarotCard) => (
      <h3 key={card.id}>
        <Link to={getCardPagePath(card)}>{card.name}</Link>
      </h3>
    ))}
  </article>
);

const mapStateToProps = ({ deck }: { deck: TDeck }) => ({ deck });

export default connect(mapStateToProps)(DeckPage);