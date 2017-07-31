/* @flow */

import React from 'react';
import { ITarotCard } from '../../types/tarot-card.interface';
import { getAtaTarotUrl, getLearnTarotUrl } from './functions';

type PropTypes = { card: ITarotCard };

const CardReadingLinks = ({ card }: PropTypes) =>
  <ul>
    <li>
      <a href={getAtaTarotUrl(card)} target="_blank">
        AtaTarot
      </a>
    </li>
    <li>
      <a href={getLearnTarotUrl(card)} target="_blank">
        LearnTarot
      </a>
    </li>
  </ul>;

export default CardReadingLinks;
