import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  getPhotos,
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE
} from "./pageActions";
import { FetchError } from "node-fetch";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("getPhotos", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should dispatch GET_PHOTOS_REQUEST and then GET_PHOTOS_SUCCESS after fetching", () => {
    // arrange
    const payload = { photos: [1, 2, 3] };
    const year = 2020;
    fetchMock.getOnce("https://jsonplaceholder.typicode.com/photos", {
      body: payload
    });
    const expectedActions = [
      {
        type: GET_PHOTOS_REQUEST,
        payload: year,
      },
      {
        type: GET_PHOTOS_SUCCESS,
        payload: payload,
      },
    ];

    const store = mockStore({});

    // action

    // assert
    return store.dispatch(getPhotos(year)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("should dispatch GET_PHOTOS_FAILURE after fetching catch", () => {
    // arrange
    const year = 2020;
    const error = new FetchError("Failed to fetch");
    fetchMock.mock("https://jsonplaceholder.typicode.com/photos", {
      throws: error,
    });
    const expectedActions = [
      {
        type: GET_PHOTOS_REQUEST,
        payload: year,
      },
      {
        type: GET_PHOTOS_FAILURE,
        payload: error,
      },
    ];

    const store = mockStore({});

    // action

    // assert
    return store.dispatch(getPhotos(year)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
