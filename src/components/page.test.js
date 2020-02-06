import React from "react";
import { shallow } from "enzyme";
import Page from "./page";

describe("Page", () => {
  it("has three buttons", () => {
    // arrange
    const photos = [];

    // action
    const wrapper = shallow(<Page photos={photos}/>);

    // assert
    expect(wrapper.find("button")).toHaveLength(3);
  })

  it("calls callback getPhotos on button click with year value", () => {
    // arrange
    const photos = [];
    const mockGetPhotos = jest.fn();
    const yearValue = "2020";
    const wrapper = shallow(<Page getPhotos={mockGetPhotos} photos={photos}/>);
    const button2020 = wrapper.find({ value: yearValue });

    // action
    button2020.simulate("click", { currentTarget: { value: yearValue }});

    // assert
    expect(mockGetPhotos).toHaveBeenCalledWith(+yearValue);
  })

  it("shows the loader when isFetching is true", () => {
    // arrange
    const photos = [];
    const loader = "Loading...";
    const wrapper = shallow(<Page isFetching={false} photos={photos} />);
    const pElement = wrapper.find("p");
    expect(pElement.text()).not.toEqual(loader);

    // action
    wrapper.setProps({ isFetching: true });
    const pElementRerendered = wrapper.find("p");

    // assert
    expect(pElementRerendered.text()).toEqual(loader);
  })
})