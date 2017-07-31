/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { getAtaTarotUrl, getLearnTarotUrl } from './functions';
import CardMeaningLink from './CardMeaningLink';

type PropTypes = { card: ITarotCard };

const CardMeaningLinkList = ({ card }: PropTypes) =>
  <ul className="list tr mb0">
    <CardMeaningLink linkName="AtaTarot" linkUrl={getAtaTarotUrl(card)} />
    <CardMeaningLink linkName="LearnTarot" linkUrl={getLearnTarotUrl(card)} />
  </ul>;

export default CardMeaningLinkList;
