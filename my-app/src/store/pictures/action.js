export const PICTURE_DATA_SUCCESS = 'PICTURE_DATA_SUCCESS';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const DELETE_FAVOURITE = 'DELETE_FAVOURITE';
export const PRELOAD_PICTURES = 'PRELOAD_PICTURES';


export function picturesDataSuccess(data, numberRange, arrFavour, arrPictures) {
  let auxArrFavour = arrFavour.map((elem) => elem.lister_url);
  let star;
  let list = data.listings;
  let arrSum;
  list = list.map((elem) => {
    star = auxArrFavour.indexOf(elem.lister_url) >= 0 ? true : false;
    return {...elem, star: star}
  });
  arrSum = numberRange === 1 ? list : arrPictures.concat(list);
  sessionStorage.setItem('resultsSearch', JSON.stringify(arrSum));
  sessionStorage.setItem('rangeNumber', numberRange);
  return {
    type: PICTURE_DATA_SUCCESS,
    payload: {list: arrSum, range: numberRange}
  }
}


export function picturesFetch(numberRange, fieldSearch, arrFavour, arrPictures) {
  return (dispatch) => {
    fetch(`https://cors-anywhere.herokuapp.com/api.nestoria.co.uk/api?encoding=json&pretty=1&action=search_listings&listing_type=rent&number_of_results=4&page=${numberRange}&country=uk&listing_type=buy&place_name=${fieldSearch}`).then(
      response => response.json()
    ).then
    (objResponse => objResponse.response
    ).then(
      arrData => dispatch(picturesDataSuccess(arrData, numberRange, arrFavour, arrPictures))
    )
  }
}

export function addFavourite(listerUrl, arrFavour, arrList) {
  let auxArrFavour = arrFavour.map((elem) => elem.lister_url);
  let arrListerUrl = arrList.map((elem) => elem.lister_url);
  if (auxArrFavour.indexOf(listerUrl) >= 0) {
    arrList[arrListerUrl.indexOf(listerUrl)].star = false;
    arrFavour.splice(auxArrFavour.indexOf(listerUrl), 1)
  } else {
    arrList[arrListerUrl.indexOf(listerUrl)].star = true;
    arrFavour.push(arrList[arrListerUrl.indexOf(listerUrl)]);
  }
  localStorage.setItem('arrFavour', JSON.stringify(arrFavour));
  return {
    type: ADD_FAVOURITE,
    payload: {arrList, arrFavour}
  }
}

export function deleteFavourite(listerUrl, arrFavour, list) {
  let auxArrFavour = arrFavour.map((elem) => elem.lister_url);
  let arrListerUrl = list.map((elem) => elem.lister_url);
  arrFavour.splice(auxArrFavour.indexOf(listerUrl), 1);
  if (list[arrListerUrl.indexOf(listerUrl)]) {
    list[arrListerUrl.indexOf(listerUrl)].star = false
  }
  localStorage.setItem('arrFavour', JSON.stringify(arrFavour));
  return {
    type: DELETE_FAVOURITE,
    payload: {arrFavourDel: arrFavour, listDel: list}
  }
}

export function preloadPictures(arrFavour, list) {
  let auxArrFavour = arrFavour.map((elem) => elem.lister_url);
  let arrListPreload = list.map((elem) => {
    let star = auxArrFavour.indexOf(elem.lister_url) >= 0 ? true : false;
    return {...elem, star: star}
  });
  return {
    type: PRELOAD_PICTURES,
    payload: arrListPreload
  }
}
