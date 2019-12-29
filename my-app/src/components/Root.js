import '../App.css'
import React from "react";
import SearchContainer from './searchContainer';
import FooterContainer from './footerContainer';
import PicturesContainer from './picturesContainer'
import Header from './Header';

class Root extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div className="container">
            <Header/>
            <SearchContainer/>
            <PicturesContainer/>
        </div>
        <FooterContainer/>
      </React.Fragment>)
  }
}
export default Root;
