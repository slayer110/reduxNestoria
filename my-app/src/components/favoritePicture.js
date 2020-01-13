import React from 'react';
import '../App.css';
import close from './images/close.png';


class FavouritePicture extends React.Component {
  deletePicture = (lister, arrFavour, list) => {
    this.props.deleteFavourite(lister, arrFavour, list)
  };

  render() {
    return (<div className="favour">
      <a href={this.props.listerUrl}><img src={this.props.image}/></a>
      <img className="imgCloseFav"
           src={close}
           onClick={this.deletePicture.bind(null, this.props.listerUrl, this.props.arrFavourite, this.props.list)}/>
    </div>)
  }
}

export default FavouritePicture;
