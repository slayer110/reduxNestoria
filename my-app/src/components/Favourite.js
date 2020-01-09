import React from 'react';
import FavouritePicture from './favoritePicture';

class Favourite extends React.Component {
  actionFavour() {
    let arrFavour;
    return arrFavour = this.props.arrFavourite.map((elem, index) => {
      return <FavouritePicture key={index} image={elem.img_url} listerUrl={elem.lister_url}
                               deleteFavourite={this.props.delete}/>
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Favourites</h1>
          {/*<div className="close" onClick={this.onVisible}><img src={close}/></div>*/}
          <div id="boxForFavourite">
            {this.actionFavour()}
          </div>
        </div>
      </div>)
  }
}

export default Favourite;
