import React from 'react';
import '../App.css';

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <h1>Property for rent</h1>
        <a id="hrefFavourite">
          Favourites
        </a>
      </div>
    )
  }
}

export default Header;
