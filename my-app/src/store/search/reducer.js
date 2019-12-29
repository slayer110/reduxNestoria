import {CHANGE_SEARCH_FIELD} from "./action";
let defaultSearch=sessionStorage.getItem('searchText')||'';
const defaultState = {
  text: defaultSearch,
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      sessionStorage.setItem('searchText', action.payload);
      return {
        text: action.payload
      }
  }
  return {...state}
};

export default searchReducer;
