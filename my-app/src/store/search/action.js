export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

export const changeSearch = (value) => {
  sessionStorage.setItem('searchText', value);
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: value
  }
};
