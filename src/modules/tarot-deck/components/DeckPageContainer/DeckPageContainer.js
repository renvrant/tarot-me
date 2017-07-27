/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type {TDeck} from '../../types/deck.type';
import DeckList from '../DeckList/DeckList';

const DeckPageContainer = ({ deck }: { deck: TDeck }) => (
  <DeckList deck={deck} />
);

const mapStateToProps = ({ deck }: { deck: TDeck }) => ({ deck });

export default connect(mapStateToProps)(DeckPageContainer);
