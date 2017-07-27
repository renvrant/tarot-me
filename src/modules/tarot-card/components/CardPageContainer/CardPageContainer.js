/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { connect } from 'react-redux';
import { cardPageSelector } from '../../store/card-page.selector';
import {IAppState} from '../../../root/types/app-state.interface';
import CardPage from '../CardPage/CardPage';

const CardPageContainer = ({ card }: { card: ITarotCard }) => {
  return (
    <CardPage card={card} />
  );
};

const mapStateToProps = (state: IAppState, { match }): { card: ITarotCard } =>
  ({ card: cardPageSelector(state, match) });

export default connect(mapStateToProps)(CardPageContainer);
