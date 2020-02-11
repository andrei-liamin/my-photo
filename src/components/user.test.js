import React from "react";
import { shallow } from "enzyme";
import User from "./user";

describe("User", () => {
  it("has p with correct name of user", () => {
    // arrange
    const name = "name";
    const surname = "surname";

    // action
    const wrapper = shallow(<User name={name} surname={surname}/>);

    // assert
    expect(wrapper.find("p").text()).toContain(name);
    expect(wrapper.find("p").text()).toContain(surname);
  })
})