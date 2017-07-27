/* @flow */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ITarotCard } from '../main/tarot-card/interfaces/tarot-card.interface';
import HomePage from '../main/components/HomePage/HomePage';
import DeckPage from '../main/tarot-deck/components/DeckPage/DeckPage';
import CardPage from '../main/tarot-card/components/CardPageContainer/CardPageContainer';


export const routes: { [key: string]: string } = {
  home: '/',
  deckPage: '/cards',
  cardPage: '/cards/:arcana/:rank',
  spreadPage: '/spreads',
  activeSpreadPageRoot: '/spreads/',
};

export const routeConfig = (
  <Switch>
    <Route exact path={routes.home} component={HomePage}/>
    <Route exact path={routes.deckPage} component={DeckPage}/>
    <Route path={routes.cardPage} component={CardPage}/>
  </Switch>
);

export const getCardPagePath = (card: ITarotCard) => `/cards/${card.arcana}/${card.rank}`;