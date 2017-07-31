/* @flow */

import { ITarotCard } from '../../../types/tarot-card.interface';
import { CourtRankType } from '../../../../tarot-deck/types/rank.type';
import { ArcanaTypes } from '../../../../tarot-deck/types/arcana.type';

export const getAtaTarotUrl = (card: ITarotCard): string => {
  const getArcanaPath = () => {
    switch (card.arcana) {
      case ArcanaTypes.Major:
        return 'maj';
      case ArcanaTypes.Coins:
        return 'p';
      case ArcanaTypes.Cups:
        return 'c';
      case ArcanaTypes.Swords:
        return 's';
      case ArcanaTypes.Wands:
        return 'w';
      default:
        return card.arcana;
    }
  };
  const getCourtRankPath = () => {
    switch (card.rank) {
      case CourtRankType.Ace:
        return 'a';
      case CourtRankType.Page:
        return 'pg';
      case CourtRankType.Knight:
        return 'kn';
      case CourtRankType.Queen:
        return 'qn';
      case CourtRankType.King:
        return 'kg';
      default:
        return card.rank;
    }
  };
  const getRankPath = () => {
    return parseInt(card.rank, 10) < 9 ? `0${card.rank}` : getCourtRankPath();
  };
  return `http://www.ata-tarot.com/resource/cards/${getArcanaPath()}${getRankPath()}.html`;
};
