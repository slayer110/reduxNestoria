import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";

class Header extends React.Component {

  render() {
    return (
      <div id="header">
        <h1>Property for rent</h1>
        <Link id="hrefFavourite" to="/favourite">
          Favourites
        </Link>
      </div>
    )
  }
}

export default Header;

