import React, { Component } from 'react';
import {connect} from 'react-redux';
import {DeckActions} from '../../tarot-deck/store/deck.actions';
import {store} from '../../../store';
import {SpreadActions} from '../../tarot-spread/store/spread.actions';

class Home extends Component {

  constructor(props) {
    super(props);
    store.dispatch(DeckActions.retrieve());
    store.dispatch(SpreadActions.create('PastPresentFuture'));

    this.state = {
    };
  }

  render() {
    return (
      <div className="Home">
        Home Component.
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
