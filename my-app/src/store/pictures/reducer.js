import {PICTURE_DATA_SUCCESS} from "./action";
import {ADD_FAVOURITE} from "./action";
import {DELETE_FAVOURITE} from "./action";

let favouriteArr = JSON.parse(localStorage.getItem('arrFavour')) || [];
let listArr = JSON.parse(sessionStorage.getItem('resultsSearch')) || [];
let range = JSON.parse(sessionStorage.getItem('rangeNumber')) || 1;

const defaultState = {
  listPictures: listArr,
  countForMore: range,
  arrFavourite: favouriteArr
};
const dataPicturesReducer = (state = defaultState, action) => {
  let auxArrFavour = state.arrFavourite.map((elem) => elem.lister_url);
  let arrListerUrl = state.listPictures.map((elem) => elem.lister_url);
  let arrList = [...state.listPictures].map((elem) => {
    return {...elem}
  });
  let arrFavour = [...state.arrFavourite].map((elem) => {
    return {...elem}
  });
  let star;
  switch (action.type) {
    case PICTURE_DATA_SUCCESS:
      let {list, range} = action.payload;
      let arr;
      list = list.map((elem) => {
        if (auxArrFavour.indexOf(elem.lister_url) >= 0) {
          star = true;
        } else {
          star = false;
        }
        return {...elem, star: star}
      });
      arr = [...state.listPictures].concat(list);
      if (range === 1) {
        arr = list;
      }
      sessionStorage.setItem('resultsSearch', JSON.stringify(arr));
      sessionStorage.setItem('rangeNumber', JSON.stringify(range));
      return {...state, countForMore: range, listPictures: arr};
    case ADD_FAVOURITE:
      if (auxArrFavour.indexOf(action.payload) >= 0) {
        arrList[arrListerUrl.indexOf(action.payload)].star = false;
        arrFavour.splice(auxArrFavour.indexOf(action.payload), 1);
      } else {
        arrList[arrListerUrl.indexOf(action.payload)].star = true;
        arrFavour.push(state.listPictures[arrListerUrl.indexOf(action.payload)]);
      }
      localStorage.setItem('arrFavour', JSON.stringify(arrFavour));
      return {...state, listPictures: arrList, arrFavourite: arrFavour};
    case DELETE_FAVOURITE:
      arrFavour.splice(auxArrFavour.indexOf(action.payload), 1);
      if (arrList[arrListerUrl.indexOf(action.payload)]) {
        arrList[arrListerUrl.indexOf(action.payload)].star = false
      }
      localStorage.setItem('arrFavour', JSON.stringify(arrFavour));
      return {...state, listPictures: arrList, arrFavourite: arrFavour};
    default:
      arrList = arrList.map((elem) => {
        if (auxArrFavour.indexOf(elem.lister_url) >= 0) {
          star = true;
        } else {
          star = false;
        }
        return {...elem, star: star}
      });
      return {...state, listPictures: arrList}
  }

};
export default dataPicturesReducer;
