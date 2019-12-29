import React from 'react';
import './App.css';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import rootReducer from './store/reducer';
import Root from './components/Root';
import {
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import FavouriteContainer from './components/favourContainer';
import InfoContainer from './components/infoContainer'

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={Root}/>
          <Route exact path='/favourite' component={FavouriteContainer}/>
          <Route path='/details/:id' component={InfoContainer}/>
        </Switch>
      </Provider>
    )
  }
}

export default App;
