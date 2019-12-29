import React from 'react';
import '../App.css';
import {connect} from "react-redux";
import Picture from './Picture';
import {addFavourite} from "../store/pictures/action";

class PicturesContainer extends React.Component {
  render() {
    let arrPicture;
    if (this.props.list) {
      arrPicture = this.props.list.map((elem, index) => {
        return <Picture key={index} listerUrl={elem.lister_url} image={elem.img_url} star={elem.star}
                        addFavourite={this.props.addFavourite}/>
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
    list: state.dataPictures.listPictures
  }
};

const putActionsToProps = {
  addFavourite
};

export default connect(putStateToProps, putActionsToProps)(PicturesContainer);
