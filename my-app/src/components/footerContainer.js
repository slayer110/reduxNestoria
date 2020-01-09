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
              searchInput={this.props.searchInput}/>
    )
  }
}

const mapState = (state) => {
  return {
    arrPictures: state.dataPictures.listPictures,
    rangeNumber: state.dataPictures.countForMore,
    searchInput: state.search.text
  }
};

const mapDispatch = {
  picturesFetch
};
export default connect(mapState, mapDispatch)(FooterContainer);
