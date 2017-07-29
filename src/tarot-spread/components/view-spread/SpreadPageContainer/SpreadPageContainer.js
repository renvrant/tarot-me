/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import SpreadPage from '../SpreadPage/SpreadPage';
import { spreadSelector } from '../../../store/spread.selectors';
import { ISpread } from '../../../types/spread.interfaces';

const SpreadPageContainer = ({ spread }: { spread: ISpread }) =>
  <SpreadPage spread={spread} />;

const mapStateToProps = state => ({
  spread: spreadSelector(state)
});

export default connect(mapStateToProps)(SpreadPageContainer);
