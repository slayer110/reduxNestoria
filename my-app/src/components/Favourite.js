import React from 'react';
// import '../App.css';
// import close from './images/close.png';
import FavouritePicture from './favoritePicture';

class Favourite extends React.Component {

  render() {
    let arrFavour = this.props.arrFavourite.map((elem, index) => {
      return <FavouritePicture key={index} image={elem.img_url} listerUrl={elem.lister_url}
                               deleteFavourite={this.props.delete}/>
    });
    return (
      <div>
        <div>
          <h1>Favourites</h1>
          {/*<div className="close" onClick={this.onVisible}><img src={close}/></div>*/}
          <div id="boxForFavourite">
            {arrFavour}
          </div>
        </div>
      </div>)
  }
}

export default Favourite;
