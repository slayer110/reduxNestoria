import {PICTURE_DATA_SUCCESS} from "./action";

const defaultState = {
  listPictures: [],
  countForMore: 1,
  arrFavourite: []
};
const dataPicturesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case PICTURE_DATA_SUCCESS:
      let {list, range} = action.payload;
      let arr;
      list = list.map((elem) => {
        return {...elem, star: false}
      });
      arr = [...state.listPictures].concat(list);
      if (range === 1) {
        arr = list;
      }
      return {...state, countForMore: range, listPictures: arr}
  }
  return state
};
export default dataPicturesReducer;
