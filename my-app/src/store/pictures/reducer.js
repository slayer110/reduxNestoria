import {PICTURE_DATA_SUCCESS} from "./action";
import {ADD_FAVOURITE} from "./action";
import {DELETE_FAVOURITE} from "./action";
import {PRELOAD_PICTURES} from "./action";
import {favouriteArr} from "../../components/memory/storage";
import {listArr} from "../../components/memory/storage";
import {rangeInit} from "../../components/memory/storage";


const defaultState = {
  listPictures: listArr,
  countForMore: rangeInit,
  arrFavourite: favouriteArr
};
const dataPicturesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PICTURE_DATA_SUCCESS:
      let {list, range} = action.payload;
      return {...state, countForMore: range, listPictures: list};
    case ADD_FAVOURITE:
      let {arrList, arrFavour} = action.payload;
      return {...state, listPictures: [...arrList], arrFavourite: [...arrFavour]};
    case DELETE_FAVOURITE:
      let {arrFavourDel, listDel} = action.payload;
      return {...state, listPictures: [...listDel], arrFavourite: [...arrFavourDel]};
    case PRELOAD_PICTURES:
      let arrListPreload = action.payload;
      return {...state, listPictures: arrListPreload}
  }
  return {...state}
};
export default dataPicturesReducer;
