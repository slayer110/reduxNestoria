import React from 'react';
import '../App.css';
import Search from './Search';
import {connect} from 'react-redux';
import {changeSearch} from "../store/search/action";
import {picturesFetch} from "../store/pictures/action";

class SearchContainer extends React.Component {
  render() {
    return <Search search={this.props.searchInput} changeSearch={this.props.changeSearch}
                   picturesFetch={this.props.picturesFetch} arrPictures={this.props.arrPictures}/>
  }
}

const putStateToProps = state => {
  return {
    searchInput: state.search.text,
    arrPictures: state.dataPictures.listPictures,
  }
};

const putActionsToProps = {
  changeSearch,
  picturesFetch
};
export default connect(putStateToProps, putActionsToProps)(SearchContainer)
