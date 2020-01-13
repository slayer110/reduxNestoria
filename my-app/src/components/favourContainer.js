import React from 'react';
// import '../App.css';
import Favourite from './Favourite';
import {connect} from 'react-redux';
import {deleteFavourite} from "../store/pictures/action";

class FavouriteContainer extends React.Component {

  render() {
    return <Favourite arrFavourite={this.props.arrFavourite}
                      delete={this.props.deleteFavourite}
                      list={this.props.arrPictures}
    />
  }
}

const mapState = state => {
  return {
    arrFavourite: state.dataPictures.arrFavourite,
    arrPictures: state.dataPictures.listPictures,
  }
};

const mapDispatch = {
  deleteFavourite
};
export default connect(mapState, mapDispatch)(FavouriteContainer)
