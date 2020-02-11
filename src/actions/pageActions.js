export const GET_PHOTOS_REQUEST = "GET_PHOTOS_REQUEST";
export const GET_PHOTOS_SUCCESS = "GET_PHOTOS_SUCCESS";
export const GET_PHOTOS_FAILURE = "GET_PHOTOS_FAILURE";

export function getPhotos(year) {
  return dispatch => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year,
    });

    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(body => {
        return dispatch({
          type: GET_PHOTOS_SUCCESS,
          payload: body,
        });
      })
      .catch(err => {
        dispatch({
          type: GET_PHOTOS_FAILURE,
          payload: err,
        });
      });
  };
}
