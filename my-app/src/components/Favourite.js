import React from 'react';
import FavouritePicture from './favoritePicture';

class Favourite extends React.Component {
  actionFavour() {
    let arrFavour = this.props.arrFavourite.map((elem, index) => {
      return <FavouritePicture key={elem.lister_url}
                               image={elem.img_url}
                               listerUrl={elem.lister_url}
                               deleteFavourite={this.props.delete}
                               arrFavourite={this.props.arrFavourite}
                               list={this.props.list}
      />
    });
    return arrFavour
  }

  render() {
    return (
      <div>
        <div>
          <h1>Favourites</h1>
          <div id="boxForFavourite">
            {this.actionFavour()}
          </div>
        </div>
      </div>)
  }
}

export default Favourite;
