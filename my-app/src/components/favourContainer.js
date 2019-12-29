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

const putStateToProps = state => {
  return {
    arrFavourite: state.dataPictures.arrFavourite
  }
};

const putActionsToProps = {
  deleteFavourite
};
export default connect(putStateToProps, putActionsToProps)(FavouriteContainer)
