import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE } from "../actions/pageActions";
import { pageReducer, initialState } from "./page";

describe("pageReducer", () => {
  it("should return the initial state", () => {
    expect(pageReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_PHOTOS_REQUEST", () => {
    // arrange
    const action = {
      type: GET_PHOTOS_REQUEST,
      payload: 2019,
    };
    const expectedState = {
      year: 2019,
      photos: [],
      isFetching: true
    };

    // action

    // assert
    expect(pageReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle GET_PHOTOS_SUCCESS", () => {
    // arrange
    const action = {
      type: GET_PHOTOS_SUCCESS,
      payload: [1, 2, 3],
    };
    const expectedState = {
      year: initialState.year,
      photos: [1, 2, 3],
      isFetching: false
    };

    // action

    // assert
    expect(pageReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle GET_PHOTOS_FAILURE", () => {
    // arrange
    const error = new Error("oh-no. that's an ERROR")
    const action = {
      type: GET_PHOTOS_FAILURE
    };
    const expectedState = {
      year: "Connection problem :(",
      photos: [],
      isFetching: false,
    };

    // action

    // assert
    expect(pageReducer(undefined, action)).toEqual(expectedState);
  });
});
