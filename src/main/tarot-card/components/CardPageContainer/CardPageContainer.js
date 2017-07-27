/* @flow */

import React from 'react';
import { ITarotCard } from '../../interfaces/tarot-card.interface';
import { connect } from 'react-redux';
import { getArcanaNameByType } from '../../../tarot-deck/types/arcana-types.functions';
import { cardPageSelector } from '../../state/card-page.selector';
import {IAppState} from '../../../../store/app-state.interface';

const CardPageContainer = ({ card }: { card: ITarotCard }) => {
  return (
    <article>
      <h2>{card.numeral}. {card.name}</h2>
      <h3>{getArcanaNameByType(card.arcana)}</h3>
      <p>{card.description}</p>
    </article>
  );
};

const mapStateToProps = (state: IAppState, { match }): { card: ITarotCard } =>
  ({ card: cardPageSelector(state, match) });

export default connect(mapStateToProps)(CardPageContainer);
