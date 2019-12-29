import React from 'react';
import '../App.css';
import close from './images/close.png';


class FavouritePicture extends React.Component {
  deletePicture = (lister) => {
    this.props.deleteFavourite(lister)
  };

  render() {
    return (<div className="favour">
      <img src={this.props.image}/>
      <img className="imgCloseFav" src={close} onClick={this.deletePicture.bind(null,this.props.listerUrl)}/>
    </div>)
  }
}

export default FavouritePicture;
