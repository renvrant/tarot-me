/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { connect } from 'react-redux';
import {
  cardPageCardSelector,
  cardPageArcanaSelector
} from '../../store/card-page.selector';
import { IAppState } from '../../../root/types/app-state.interface';
import CardPage from '../CardPage/CardPage';
import { IArcana } from '../../../tarot-deck/types/arcana.interface';

type PropTypes = {
  card: ITarotCard,
  arcana: IArcana
};

const CardPageContainer = ({ card, arcana }: PropTypes) => {
  return <CardPage card={card} arcana={arcana} />;
};

const mapStateToProps = (
  state: IAppState,
  { match }
): { card: ITarotCard } => ({
  card: cardPageCardSelector(state, match),
  arcana: cardPageArcanaSelector(state, match)
});

export default connect(mapStateToProps)(CardPageContainer);
