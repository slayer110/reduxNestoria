import React from 'react';
import '../App.css';
import {connect} from "react-redux";
import Info from './Info'

class InfoContainer extends React.Component {

  takeData() {
    let arrId = this.props.arrInfo.map((elem) => elem.lister_url.split('/')[4]);
    return this.props.arrInfo[arrId.indexOf(this.props.match.params.id)]
  }

  render() {
    const {img_url, bathroom_number, room_number, price, title} = this.takeData();
    return <Info image={img_url}
                 bathroomNumber={bathroom_number}
                 roomNumber={room_number}
                 price={price}
                 address={title}/>
  }
}

const mapState = (state) => {
  return {
    arrInfo: state.dataPictures.listPictures
  }
};
export default connect(mapState)(InfoContainer);
