export const PICTURE_DATA_SUCCESS = 'PICTURE_DATA_SUCCESS';
export const ADD_FAVOURITE = 'PICTURE_DATA_SUCCESS';

export function picturesDataSuccess(data, numberRange) {
  return {
    type: PICTURE_DATA_SUCCESS,
    payload: {list: data.listings, range: numberRange}
  }
}


export function picturesFetch(numberRange, fieldSearch) {
  return (dispatch) => {
    fetch(`https://cors-anywhere.herokuapp.com/api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&listing_type=rent&number_of_results=4&page=${numberRange}&country=uk&listing_type=buy&place_name=${fieldSearch}`).then(
      response => response.json()
    ).then
    (objResponse => objResponse.response
    ).then(
      arrData => dispatch(picturesDataSuccess(arrData, numberRange))
    )
  }
}

