import React from 'react';
import '../App.css';

class Footer extends React.Component {

  nextPictures = () => {
    console.log(this.props.pictures)
    this.props.picturesRange(this.props.rangeNumber + 1, this.props.searchInput, this.props.arrFavour, this.props.pictures)
  };

  render() {
    return (
      <div className="footer">
        {this.props.pictures.length ? <span onClick={this.nextPictures}>Further</span> : ''}
      </div>
    )
  }
}

export default Footer;
