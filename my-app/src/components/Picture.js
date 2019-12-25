import React from 'react';
import '../App.css';
import noActive from './images/noactive.png';
import active from './images/active.png';

class Picture extends React.Component {
  render() {
    return (
      <a>
        <img src={this.props.image}/>
        <img className="star" src={this.props.star?active:noActive}/>
      </a>
    )
  }
}

export default Picture;
