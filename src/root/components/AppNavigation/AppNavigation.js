/* flow */
import React from 'react';
import { routes } from '../../app.routes';
import { Link } from 'react-router-dom';
import './AppNavigation.css';

const AppNavigation = () =>
  <nav className="app-nav">
    <Link to={routes.home}>Home</Link>
    <Link to={routes.deckPage}>Deck</Link>
  </nav>;

export default AppNavigation;
