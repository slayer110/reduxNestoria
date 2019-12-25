import React from 'react';
import '../App.css';

class Footer extends React.Component {

  nextPictures=()=>{
    this.props.picturesRange(this.props.rangeNumber+1,this.props.searchInput)
  };
  render() {
    return (
      <div className="Footer">
        {this.props.pictures.length?<a onClick={this.nextPictures}>Further</a>:''}
      </div>
    )
  }
}

export default Footer;
