import React from 'react';
import '../App.css';

class Info extends React.Component {

  render() {
    return (
      <div id="boxForInfo">
        <h1>Info about realty</h1>
        <div className="left">
          <h2>Photo</h2>
          <img alt='sorry' className="imgInfo" src={this.props.image}/>
        </div>
        <div className="right">
          <h2>Info</h2>
          <ul>
            <li>Bathrooms number:
              <span className="bathroom">{this.props.bathroomNumber}</span>
            </li>
            <li>Rooms numbers:
              <span className="room">{this.props.roomNumber}</span>
            </li>
            <li>Address:
              <span className="address">{this.props.address}</span>
            </li>
            <li>Price:
              <span className="price">{this.props.price}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Info;
