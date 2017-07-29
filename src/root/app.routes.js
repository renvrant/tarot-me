/* @flow */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ITarotCard } from '../tarot-card/types/tarot-card.interface';
import DeckPageContainer from '../tarot-deck/components/DeckPageContainer/DeckPageContainer';
import CardPageContainer from '../tarot-card/components/CardPageContainer/CardPageContainer';
import SpreadPageContainer from '../tarot-spread/components/SpreadPageContainer/SpreadPageContainer';
import CreateSpreadContainer from '../tarot-spread/components/CreateSpreadContainer/CreateSpreadContainer';

export const routes: { [key: string]: string } = {
  home: '/',
  deckPage: '/cards',
  cardPage: '/cards/:arcana/:rank',
  spreadPage: '/spreads',
  activeSpreadPage: '/spreads/:type',
};

export const routeConfig = (
  <Switch>
    <Route exact path={routes.home} component={CreateSpreadContainer}/>
    <Route exact path={routes.deckPage} component={DeckPageContainer}/>
    <Route path={routes.cardPage} component={CardPageContainer}/>
    <Route exact path={routes.spreadPage} component={CreateSpreadContainer}/>
  </Switch>
);

export const getCardPagePath = (card: ITarotCard) => `/cards/${card.arcana}/${card.rank}`;
