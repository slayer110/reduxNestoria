import React from 'react';
import '../App.css';
import noActive from './images/noactive.png';
import active from './images/active.png';
import {Link} from "react-router-dom";

class Picture extends React.Component {
  changeStarFavourite = (lister) => {
    this.props.addFavourite(lister)
  };

  render() {
    let id = this.props.listerUrl.split('/')[4];
    return (
      <div className="pictures">
        <Link to={`/details/${id}`}>
          <img src={this.props.image}/>
        </Link>
        <img className="star"
             src={this.props.star ? active : noActive}
             onClick={this.changeStarFavourite.bind(null, this.props.listerUrl)}/>
      </div>
    )
  }
}

export default Picture;
