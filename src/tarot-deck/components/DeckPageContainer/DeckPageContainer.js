/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import DeckList from '../DeckList/DeckList';
import { deckByArcanaSelector } from '../../store/deck.selectors';
import { IDeckByArcana } from '../../types/deck-by-arcana.interface';

type PropTypes = { deckByArcana: Array<IDeckByArcana> };

const DeckPageContainer = ({ deckByArcana }: PropTypes) =>
  <DeckList deckByArcana={deckByArcana} />;

const mapStateToProps = state => ({
  deckByArcana: deckByArcanaSelector(state)
});

export default connect(mapStateToProps)(DeckPageContainer);
