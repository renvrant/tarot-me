import React, { Component } from 'react';
import AppRouter from '../AppRouter/AppRouter';
import AppNavigation from '../AppNavigation/AppNavigation';
import { connect } from 'react-redux';
import { DeckActions } from '../../main/tarot-deck/store/deck.actions';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(DeckActions.retrieve());
  }

  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <AppNavigation/>
          <AppRouter/>
        </main>
      </BrowserRouter>
    );
  }
}



// class TestRoutes extends Component {
//   render() {
//     return (
//       <div>
//         Hello
//         <Link to="/deck">Card</Link> <Link to="/test">Card</Link>
//         <Switch>
//           <Route exact path="/" component={HomePage}/>
//           <Route path="/test" component={TestPage}/>
//           <Route path="/deck" component={DeckPage}/>
//         </Switch>
//       </div>
//     );
//   }
// }


const mapStateToProps = ({ dispatch }) => ({ dispatch });
//
export default connect(mapStateToProps)(App);

// export default App;
