/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import {ISpread, ISpreadMetadata} from '../../types/spread.interfaces';
import {spreadMetadataSelector, spreadSelector} from '../../store/spread.selectors';
import {SpreadActions} from '../../store/spread.actions';
import CreateSpreadPage from '../CreateSpreadPage/CreateSpreadPage';
import type {TSpreadType} from '../../types/spread.types';
import SpreadLayout from '../SpreadLayout/SpreadLayout';

const CreateSpreadContainer = ({ spreadMetadata, createSpread, currentSpread }: {
  spreadMetadata: Array<ISpreadMetadata>,
  createSpread: (type: TSpreadType) => any,
  currentSpread: ISpread,
}) => (
  <div>
    {console.log(spreadMetadata)}
    <CreateSpreadPage spreads={spreadMetadata} createSpread={createSpread} />
    <SpreadLayout spread={currentSpread} />
  </div>
);

const mapStateToProps = (state) => ({
  spreadMetadata: spreadMetadataSelector(state),
  currentSpread: spreadSelector(state),
});

const mapDispatchToProps = {
  createSpread: SpreadActions.create,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSpreadContainer);
