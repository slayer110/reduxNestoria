import React from 'react';
import '../App.css';
import {connect} from "react-redux";
import Info from './Info'

class InfoContainer extends React.Component {

  getData() {
    return this.props.arrInfo.find((elem) => this.props.match.params.id === elem.lister_url.split('/')[4])
  }

  render() {
    const {img_url, bathroom_number, room_number, price, title} = this.getData();
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
