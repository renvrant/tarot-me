/* @flow */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ITarotCard } from '../tarot-card/types/tarot-card.interface';
import HomePage from '../home/components/HomePage/HomePage';
import DeckPageContainer from '../tarot-deck/components/DeckPageContainer/DeckPageContainer';
import CardPageContainer from '../tarot-card/components/CardPageContainer/CardPageContainer';
import SpreadPageContainer from '../tarot-spread/components/SpreadPageContainer/SpreadPageContainer';

export const routes: { [key: string]: string } = {
  home: '/',
  deckPage: '/cards',
  cardPage: '/cards/:arcana/:rank',
  spreadPage: '/spreads',
  activeSpreadPage: '/spreads/:type',
};

export const routeConfig = (
  <Switch>
    <Route exact path={routes.home} component={HomePage}/>
    <Route exact path={routes.deckPage} component={DeckPageContainer}/>
    <Route path={routes.cardPage} component={CardPageContainer}/>
    <Route exact path={routes.spreadPage} component={SpreadPageContainer}/>
  </Switch>
);

export const getCardPagePath = (card: ITarotCard) => `/cards/${card.arcana}/${card.rank}`;
