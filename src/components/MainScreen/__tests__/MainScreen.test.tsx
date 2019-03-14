import React from "react";
import { shallow } from "enzyme";
import MainScreen from "../MainScreen";

describe("<MainScreen />", () => {
  it("renders", () => {
    const wrapper = shallow(<MainScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
