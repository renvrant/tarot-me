/* @flow */
import React from 'react';
import {IDrawnSpread} from '../../types/drawn-spread.interface';
import {getSpreadPositionInfo} from '../../types/spread-types.functions';
import DrawnTarotCard from '../DrawnTarotCard/DrawnTarotCard';

function buildCardList(spread: IDrawnSpread) {
  const cardList = [];
  spread.cards.forEach((card, position) => (
    cardList.push(
      <DrawnTarotCard card={card} positionTitle={getSpreadPositionInfo(spread.type, position)} key={position} />
    )
  ));
  return cardList
}

const SpreadLayout = ({ spread }: { spread: IDrawnSpread}) => (
  <section>
    <h2>Spread</h2>
    { buildCardList(spread).map(drawnCardComponent => drawnCardComponent) }
  </section>
);

export default SpreadLayout;
