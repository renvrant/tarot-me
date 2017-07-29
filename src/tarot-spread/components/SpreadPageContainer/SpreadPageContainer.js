/* @flow */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {ISpreadMetadata} from '../../types/spread.interfaces';
import {SpreadActions} from '../../store/spread.actions';
import SpreadPage from '../SpreadPage/SpreadPage';

class SpreadPageContainer extends Component {
  componentDidMount() {
    this.props.clear();
  }

  render() {
    return (
      <SpreadPage createSpread={this.props.createSpread} currentSpread={this.props.spread} />
    )
  }
};

const mapStateToProps = ({ spread }: { spread: ISpreadMetadata }) => ({ spread });
const mapDispatchToProps = {
  createSpread: SpreadActions.create,
  clear: SpreadActions.clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpreadPageContainer);
