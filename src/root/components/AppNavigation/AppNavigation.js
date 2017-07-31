/* @flow */
import React from 'react';
import { routes } from '../../app.routes';
import { Link } from 'react-router-dom';

const AppNavigation = () =>
  <nav className="flex pa3 justify-end z-2 absolute top-0 right-0">
    <Link to={routes.home} className="dib mr4 black link dim ttu fw6">
      Create a Spread
    </Link>
    <Link to={routes.deckPage} className="dib mr4 black link dim ttu fw6">
      View Cards
    </Link>
  </nav>;

export default AppNavigation;
