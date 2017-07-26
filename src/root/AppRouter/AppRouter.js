/* flow */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../app.routes'
import HomePage from '../../main/components/Home/HomePage';
import DeckPage from '../../main/tarot-deck/components/DeckPage/DeckPage';
import CardPage from '../../main/tarot-card/components/CardPage/CardPage';

const AppRouter = () => (
  <Switch>
    <Route exact path={routes.home} component={HomePage}/>
    <Route exact path={routes.deckPage} component={DeckPage}/>
    <Route path={routes.cardPage} component={CardPage}/>
  </Switch>
);

export default AppRouter;
