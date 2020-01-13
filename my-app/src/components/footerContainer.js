import React from 'react';
import '../App.css';
import Footer from './Footer';
import {connect} from "react-redux";
import {picturesFetch} from "../store/pictures/action";

class FooterContainer extends React.Component {
  render() {
    return (
      <Footer pictures={this.props.arrPictures}
              picturesRange={this.props.picturesFetch}
              rangeNumber={this.props.rangeNumber}
              searchInput={this.props.searchInput}
              arrFavour={this.props.arrFavourite}
      />
    )
  }
}

const mapState = (state) => {
  return {
    arrPictures: state.dataPictures.listPictures,
    rangeNumber: state.dataPictures.countForMore,
    searchInput: state.search.text,
    arrFavourite: state.dataPictures.arrFavourite
  }
};

const mapDispatch = {
  picturesFetch
};
export default connect(mapState, mapDispatch)(FooterContainer);
