import React from 'react';
import '../App.css';
import noActive from './images/noactive.png';
import active from './images/active.png';
import {Link} from "react-router-dom";

class Picture extends React.Component {
  changeStarFavourite = (lister, favour, arrList) => {
    this.props.addFavourite(lister, favour, arrList)
  };

  getId() {
    return this.props.listerUrl.split('/')[4];
  }

  render() {
    return (
      <div className="pictures">
        <Link to={`/details/${this.getId()}`}>
          <img src={this.props.image}/>
        </Link>
        <img className="star"
             src={this.props.star ? active : noActive}
             onClick={this.changeStarFavourite.bind(null, this.props.listerUrl, this.props.arrFavourite, this.props.arrList)}/>
      </div>
    )
  }
}

export default Picture;
