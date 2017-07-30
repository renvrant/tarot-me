/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import SpreadPage from '../SpreadPage/SpreadPage';
import { spreadSelector } from '../../../store/spread.selectors';
import { ISpread } from '../../../types/spread.interfaces';
import { SpreadActions } from '../../../store/spread.actions';

const SpreadPageContainer = ({
  spread,
  flipCard
}: {
  spread: ISpread,
  flipCard: () => any
}) => <SpreadPage spread={spread} flipCard={flipCard} />;

const mapStateToProps = state => ({
  spread: spreadSelector(state)
});

const mapDispatchToProps = {
  flipCard: SpreadActions.flipCard
};

export default connect(mapStateToProps, mapDispatchToProps)(
  SpreadPageContainer
);
