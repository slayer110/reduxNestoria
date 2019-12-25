import React from 'react';
import './App.css';
import Header from './components/Header';
import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import rootReducer from './store/reducer';
import SearchContainer from './components/searchContainer';
import FooterContainer from './components/footerContainer';
import PicturesContainer from './components/picturesContainer'

const store = createStore(rootReducer, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <div className="container">
            <Header/>
            <SearchContainer/>
            <PicturesContainer/>
          </div>
          <FooterContainer/>
        </div>
      </Provider>
    )
  }
}

export default App;
