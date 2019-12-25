import searchReducer from './search/reducer';
import {combineReducers} from 'redux';
import dataPicturesReducer from './pictures/reducer'

export default combineReducers({
  search: searchReducer,
  dataPictures: dataPicturesReducer
});
