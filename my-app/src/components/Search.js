import React from 'react';
import '../App.css';

class Search extends React.Component {
  onChangeSearch = (e) => {
    this.props.changeSearch(e.target.value)
  };
  onClickSearch=()=>{
    let firstRange=1;
    this.props.picturesFetch(firstRange,this.props.search)
  };

  render() {
    return (
      <div id="search">
        <input type="text" value={this.props.search} onChange={this.onChangeSearch}/>
        <div id="buttonSearch" onClick={this.onClickSearch}><span>Search</span></div>
      </div>)
  }
}

export default Search;
