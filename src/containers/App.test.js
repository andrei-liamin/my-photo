import React from "react";
import { shallow } from "enzyme";
import { App, mapStateToProps, mapDispatchToProps } from "./App";

describe("App", () => {
  it("renders subcomponents Page and User", () => {
    // arrange

    // action
    const wrapper = shallow(<App />);

    // assert
    expect(wrapper.find("Page")).toHaveLength(1);
    expect(wrapper.find("User")).toHaveLength(1);
  })

  it("should call getPhotos, if Page calls one", () => {
    // arrange
    const mockGetPhotos = jest.fn();
    const wrapper = shallow(<App getPhotos={mockGetPhotos} />);
    const page = wrapper.find("Page");

    // action
    page.props().getPhotos();

    // assert
    expect(mockGetPhotos).toHaveBeenCalledTimes(1);
  })
})

test("mapStateToProps", () => {
  const store = {
    user: "user",
    page: "page"
  }
  expect(mapStateToProps(store)).toEqual(store);
})

test("mapDispatchToProps", () => {
  const mockDispatch = jest.fn();
  mapDispatchToProps(mockDispatch).getPhotos();
  expect(mockDispatch).toHaveBeenCalledTimes(1);
})