import {CHANGE_SEARCH_FIELD} from "./action";

const defaultState = {
  text: '',
};

const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        text: action.payload
      }
  }
  return {...state}
};

export default searchReducer;
