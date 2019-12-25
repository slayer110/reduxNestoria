import React from 'react';
import '../App.css';
import {connect} from "react-redux";
import Picture from './Picture'

class PicturesContainer extends React.Component {
  render() {
    let arrPicture;
    if (this.props.list) {
      arrPicture = this.props.list.map((elem, index) => {
        return <Picture key={index} image={elem.img_url} star={elem.star}/>
      })
    } else {
      arrPicture = '';
    }
    return (
      <div id="pictures">
        {arrPicture}
      </div>
    )
  }
}

const putStateToProps = (state) => {
  return {
    list: state.dataPictures.listPictures,
  }
};

export default connect(putStateToProps)(PicturesContainer);
