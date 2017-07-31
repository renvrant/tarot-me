/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { ISpreadMetadata } from '../../../types/spread.interfaces';
import { spreadMetadataSelector } from '../../../store/spread.selectors';
import { SpreadActions } from '../../../store/spread.actions';
import CreateSpreadPage from '../CreateSpreadPage/CreateSpreadPage';
import { IPayloadAction } from '../../../../root/types/create-action.interface';

type PropTypes = {
  spreadMetadata: Array<ISpreadMetadata>,
  createSpread: (spread: ISpreadMetadata) => IPayloadAction
};

const CreateSpreadContainer = ({ spreadMetadata, createSpread }: PropTypes) =>
  <CreateSpreadPage spreads={spreadMetadata} createSpread={createSpread} />;

const mapStateToProps = state => ({
  spreadMetadata: spreadMetadataSelector(state)
});

const mapDispatchToProps = {
  createSpread: SpreadActions.create
};

export default connect(mapStateToProps, mapDispatchToProps)(
  CreateSpreadContainer
);
