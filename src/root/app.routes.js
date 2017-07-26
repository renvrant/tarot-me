/* flow */

import { ITarotCard } from '../main/tarot-card/interfaces/tarot-card.interface';

export const routes: { [key: string]: string } = {
  home: '/',
  deckPage: '/cards',
  cardPage: '/cards/:arcana/:id',
  spreadPage: '/spreads',
  activeSpreadPageRoot: '/spreads/',
};

export const getCardPagePath = (card: ITarotCard) => `/cards/${card.arcana}/${card.rank}`;

