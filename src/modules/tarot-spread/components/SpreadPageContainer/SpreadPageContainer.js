/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import {ISpread} from '../../types/spread.interface';
import {SpreadActions} from '../../store/spread.actions';
import SpreadPage from '../SpreadPage/SpreadPage';

const SpreadPageContainer = ({ createSpread, spread }) => (
  <SpreadPage createSpread={createSpread} currentSpread={spread} />
);

const mapStateToProps = ({ spread }: { spread: ISpread }) => ({ spread });
const mapDispatchToProps = { createSpread: SpreadActions.create };

export default connect(mapStateToProps, mapDispatchToProps)(SpreadPageContainer);
