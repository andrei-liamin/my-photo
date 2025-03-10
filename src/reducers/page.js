import { GET_PHOTOS_SUCCESS, GET_PHOTOS_REQUEST, GET_PHOTOS_FAILURE } from "../actions/pageActions";

export const initialState = {
  year: 2020,
  photos: [],
  isFetching: false
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isFetching: true };
    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false };
    case GET_PHOTOS_FAILURE:
      return { year: "Connection problem :(", photos: [], isFetching: false };

    default: 
      return state;
  }
}
