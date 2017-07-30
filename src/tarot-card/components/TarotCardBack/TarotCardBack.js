/* @flow */

import React from 'react';
import { cardIcons } from '../../../assets/card-icons';
import '../../styles/tarot-card.css';

const TarotCardBack = () =>
  <div className="tc-back tc-hw tc-bdr-black tc-bdr-half-width bg-black flex br5">
    <div className="tc-inner tc-bdr-white tc-bdr-width br4">
      <img src={cardIcons['back']} alt="" className="tc-icon" />
    </div>
  </div>;

export default TarotCardBack;
