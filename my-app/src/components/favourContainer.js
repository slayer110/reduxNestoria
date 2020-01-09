import React from 'react';
// import '../App.css';
import Favourite from './Favourite';
import {connect} from 'react-redux';
import {deleteFavourite} from "../store/pictures/action";

class FavouriteContainer extends React.Component {

  render() {
    return <Favourite visible={this.props.visible} visibleFunction={this.props.visibleFavourite}
                      arrFavourite={this.props.arrFavourite} delete={this.props.deleteFavourite}/>
  }
}

const mapState = state => {
  return {
    arrFavourite: state.dataPictures.arrFavourite
  }
};

const mapDispatch = {
  deleteFavourite
};
export default connect(mapState, mapDispatch)(FavouriteContainer)
