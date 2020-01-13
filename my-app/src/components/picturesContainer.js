import React from 'react';
import '../App.css';
import {connect} from "react-redux";
import Picture from './Picture';
import {addFavourite} from "../store/pictures/action";
import {preloadPictures} from "../store/pictures/action";

class PicturesContainer extends React.Component {

  componentDidMount() {
    this.props.preloadPictures(this.props.arrFavourite, this.props.list)
  }

  viewPictures() {
    let arrPicture;
    if (this.props.list) {
      arrPicture = this.props.list.map((elem, index) => {
        return <Picture key={index}
                        listerUrl={elem.lister_url}
                        image={elem.img_url}
                        star={elem.star}
                        addFavourite={this.props.addFavourite}
                        arrFavourite={this.props.arrFavourite}
                        arrList={this.props.list}
        />
      })
    } else {
      arrPicture = '';
    }
    return arrPicture;
  }

  render() {
    return (
      <div id="pictures">
        {this.viewPictures()}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.dataPictures.listPictures,
    arrFavourite: state.dataPictures.arrFavourite
  }
};

const mapDispatch = {
  addFavourite,
  preloadPictures
};

export default connect(mapState, mapDispatch)(PicturesContainer);
